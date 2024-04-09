import { Book, Home, Settings, CalendarDays, Info } from "lucide-react";

import { type TRoute } from "../route";

type Routes = TRoute[];

const routes: Routes = [
  {
    href: "/home",
    label: "Главная",
    icon: <Home />,
  },
  {
    href: "/information",
    label: "Информация",
    icon: <Info />,
  },
  {
    href: "/courses",
    label: "Курсы",
    icon: <Book />,
  },
  {
    href: "/schedule",
    label: "Расписание",
    icon: <CalendarDays />,
  },
  {
    href: "/settings",
    label: "Настройки",
    icon: <Settings />,
  },
];

export default routes;
