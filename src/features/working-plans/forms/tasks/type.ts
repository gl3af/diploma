import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

import { CreateSchema } from "./validation";

type Key = keyof CreateSchema;

export type ComponentsProps<T extends Key> = {
  field: ControllerRenderProps<CreateSchema, T>;
  fieldState: ControllerFieldState;
};
