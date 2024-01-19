import {
  LayoutDashboard,
  Apple,
  Book,
  Dumbbell,
  Calculator,
  BarChart,
  Bike,
} from "lucide-react";
import { type Route } from "../route";

type Routes = Route[];

const routes: Routes = [
  {
    href: "/dashboard",
    label: "Доска",
    icon: <LayoutDashboard />,
  },
  {
    href: "/exercise-bank",
    label: "Банк упражнений",
    icon: <Dumbbell />,
  },
  {
    href: "/training-plans",
    label: "Тренировочные планы",
    icon: <Book />,
  },
  {
    href: "/nutrition",
    label: "Дневник питания",
    icon: <Apple />,
  },
  {
    href: "/training",
    label: "Дневник тренировок",
    icon: <Bike />,
  },
  {
    href: "/one-rep-max-calculator",
    label: "1RM Калькулятор",
    icon: <Calculator />,
  },
  {
    href: "/stats",
    label: "Статистика",
    icon: <BarChart />,
  },
];

export default routes;
