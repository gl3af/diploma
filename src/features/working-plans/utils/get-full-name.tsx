type UserData = {
  name: string | null;
  surname: string | null;
  middlename: string | null;
} | null;

type WithFullName<T> = T & {
  fullName: string;
};

export function getFullName<User extends UserData>(user: User): WithFullName<User> {
  return {
    ...user,
    fullName: `${user?.surname} ${user?.name} ${user?.middlename}`,
  };
}
