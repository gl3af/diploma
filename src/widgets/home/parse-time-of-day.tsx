import { Moon, Sun, Sunrise, Sunset } from "lucide-react";
import { ReactNode } from "react";

type Result = {
  icon: ReactNode;
  title: string;
};

export function parseTimeOfDay(date: Date): Result {
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) return { icon: <Sunrise />, title: "Доброе утро" };
  if (hours >= 12 && hours < 18) return { icon: <Sun />, title: "Добрый день" };
  if (hours >= 18 && hours <= 23) return { icon: <Sunset />, title: "Добрый вечер" };

  return { icon: <Moon />, title: "Доброй ночи" };
}
