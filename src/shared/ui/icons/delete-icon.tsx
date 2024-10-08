import { X } from "lucide-react";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { type ButtonProps } from "../button";

export const DeleteIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
        <X size={24} className="cursor-pointer text-red-600 transition-opacity hover:opacity-70" />
      </Comp>
    );
  }
);

DeleteIcon.displayName = "DeleteIcon";
