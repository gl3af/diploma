"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/shared/utils";
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/ui";

import { ComponentsProps } from "./type";

export function DatePicker({ field, fieldState }: ComponentsProps<"deadline">) {
  return (
    <FormItem className="flex flex-col">
      <FormLabel className="text-md text-left font-medium">
        Срок выполнения <span className="text-red-600">*</span>
      </FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl
            className={cn(fieldState.error && "ring-2 ring-red-500 focus-visible:ring-red-500")}
          >
            <Button
              variant="outline"
              className={cn(
                "w-full pl-3 text-left font-normal",
                !field.value && "text-muted-foreground"
              )}
            >
              {field.value ? (
                format(field.value, "PPP", { locale: ru })
              ) : (
                <span>Выберите дату</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) => date < new Date()}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
}
