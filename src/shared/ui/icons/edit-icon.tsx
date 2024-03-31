import { Pencil } from "lucide-react";
import { type ButtonProps } from "../button";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

export const EditIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        size="icon"
        variant="outline"
        className="h-fit w-fit border-0 bg-transparent p-0"
        ref={ref}
        {...props}
      >
        <Pencil size={20} className="cursor-pointer" />
      </Comp>
    );
  },
);

EditIcon.displayName = "EditIcon";
