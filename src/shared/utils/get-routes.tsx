import { Book, Briefcase, Building, Settings, SquareUserRound, User } from "lucide-react";

const routesData = [
  "home",
  "departments",
  "directory",
  "workingPlans",
  "users",
  "settings",
] as const;

export type RoutesData = (typeof routesData)[number];

type ROLE = "user" | "admin";
export type TRoute = {
  label: string;
  href: string;
  icon: React.ReactNode;
  roles: ROLE[];
};

export type Routes = {
  [key in RoutesData]: TRoute;
};

export const getRoutes = (size?: number): Routes =>
  ({
    home: {
      href: "/home",
      label: "Главная",
      icon: <SquareUserRound size={size} />,
      roles: ["admin", "user"],
    },
    departments: {
      href: "/departments",
      label: "Отделы",
      icon: <Building size={size} />,
      roles: ["admin", "user"],
    },
    directory: {
      href: "/directory",
      label: "Справочник",
      icon: <Book size={size} />,
      roles: ["admin", "user"],
    },
    workingPlans: {
      href: "/working-plans",
      label: "Планы работ",
      icon: <Briefcase size={size} />,
      roles: ["admin", "user"],
    },
    users: {
      href: "/users",
      label: "Пользователи",
      icon: <User size={size} />,
      roles: ["admin"],
    },
    settings: {
      href: "/settings",
      label: "Настройки",
      icon: <Settings size={size} />,
      roles: ["user"],
    },
  }) as const;
