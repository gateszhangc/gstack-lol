import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-medium tracking-[0.18em] uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-stone-950 bg-stone-950 px-6 py-3 text-stone-50 hover:-translate-y-0.5 hover:bg-[#d3542a] hover:border-[#d3542a]",
        brand:
          "button-brand px-6 py-3 text-stone-50 hover:-translate-y-0.5",
        outline:
          "border-stone-950/20 bg-stone-50/70 px-6 py-3 text-stone-950 hover:-translate-y-0.5 hover:border-stone-950/60 hover:bg-stone-100",
        ghost:
          "border-transparent bg-transparent px-4 py-2 text-stone-950 hover:bg-stone-950/5",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-7 py-4 text-[0.78rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
