import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import {
  type ControllerFieldState,
  type ControllerRenderProps,
} from "react-hook-form";
import { type CreateSchema } from "./validation";
import { cn } from "@/shared/utils";
import { useSearchParams } from "next/navigation";
import { api } from "@/trpc/react";

export const PositionSelect = ({
  field,
  fieldState,
}: {
  field: ControllerRenderProps<CreateSchema, "position">;
  fieldState: ControllerFieldState;
}) => {
  const searchParams = useSearchParams();
  const department = searchParams.get("dept");

  const { data: departmentInfo, isLoading } =
    api.departments.getByName.useQuery(
      { name: department },
      { enabled: !!department },
    );

  console.log(departmentInfo?.positions);

  return (
    <FormItem className="flex flex-col gap-2 space-y-0">
      <FormLabel className="text-md text-left font-medium">
        Должность <span className="text-red-600">*</span>
      </FormLabel>
      <Select
        onValueChange={field.onChange}
        defaultValue={field.value}
        disabled={!department || isLoading}
      >
        <FormControl
          className={cn(
            fieldState.error &&
              "ring-2 ring-red-500 focus-visible:ring-red-500",
          )}
        >
          <SelectTrigger>
            <SelectValue placeholder="Выберите должность" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Должности</SelectLabel>
            {departmentInfo?.positions.map(({ id, name }) => (
              <SelectItem key={id} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <FormMessage />
    </FormItem>
  );
};
