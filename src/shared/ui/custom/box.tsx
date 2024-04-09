import { type ComponentProps, type ElementType } from "react";

type BoxProps<E extends ElementType> = Omit<ComponentProps<E>, "as"> & {
  as?: E;
};

export function Box<E extends ElementType = "div">({ as, children, ...props }: BoxProps<E>) {
  const Component = as ?? "div";
  return <Component {...props}>{children}</Component>;
}
