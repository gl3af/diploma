import { PlusCircle } from "lucide-react";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { type ButtonProps } from "../button";

export const AddIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
        <PlusCircle className="cursor-pointer transition-all hover:text-green-400" />
      </Comp>
    );
  }
);

AddIcon.displayName = "AddIcon";
