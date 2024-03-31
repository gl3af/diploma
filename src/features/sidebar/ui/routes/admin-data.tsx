import { SquareUserRound, Phone, Building, Book } from "lucide-react";
import { type Route } from "../route";

type Routes = Route[];

const BASE = "/admin";

const adminRoutes: Routes = [
  {
    href: BASE,
    label: "Админ-панель",
    icon: <SquareUserRound />,
  },
  {
    href: `${BASE}/departments`,
    label: "Отделы",
    icon: <Building />,
  },
  {
    href: `${BASE}/phones`,
    label: "Телефоны",
    icon: <Phone />,
  },
  {
    href: `${BASE}/directory`,
    label: "Справочник",
    icon: <Book />,
  },
];

export default adminRoutes;
