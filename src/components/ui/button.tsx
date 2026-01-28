import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsla(0,100%,60%,0.3)] hover:shadow-[0_0_30px_hsla(0,100%,60%,0.5)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-transparent hover:bg-card hover:border-secondary hover:shadow-[0_0_15px_hsla(211,100%,50%,0.3)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-[0_0_20px_hsla(211,100%,50%,0.3)] hover:shadow-[0_0_30px_hsla(211,100%,50%,0.5)]",
        ghost: "hover:bg-card hover:text-foreground",
        link: "text-secondary underline-offset-4 hover:underline",
        gradient:
          "relative bg-gradient-to-r from-secondary via-primary to-warning text-foreground font-semibold shadow-[0_0_25px_hsla(211,100%,50%,0.4)] hover:shadow-[0_0_40px_hsla(211,100%,50%,0.6)] hover:scale-105 animate-gradient bg-[length:200%_200%]",
        hero:
          "bg-secondary text-secondary-foreground font-semibold shadow-[0_0_25px_hsla(211,100%,50%,0.4)] hover:shadow-[0_0_40px_hsla(211,100%,50%,0.6)] hover:scale-105 hover:bg-secondary/90",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
