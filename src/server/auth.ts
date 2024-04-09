import { getServerSession, type NextAuthOptions, type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { env } from "@/env";
import { db } from "@/server/db";

declare module "next-auth" {
  interface User {
    role: "admin" | "user";
  }
  interface Session {
    user: {
      id: string;
      role: "admin" | "user";
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    role: "admin" | "user";
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: async ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id,
        role: token.role,
      },
    }),
    jwt: async ({ user, token }) => {
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
        };
      }

      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 14 * 24 * 60 * 60, // 14 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await db.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) throw new Error("email:Пользователь не найден");

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) throw new Error("password:Неверный пароль");

        return user;
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
};

export const getServerAuthSession = () => getServerSession(authOptions);
