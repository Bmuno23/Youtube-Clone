import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(["hover: bg-secondary-hover", "transition-colors"], {
  variants: {
    variant:{
        default:["bg-secondary", "hover:bg-secondary-hover"],
            ghost:["hover: bg-grey-100"],
    }, 
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  }
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({variant,size, ...props}: ButtonProps) {
  return <button {...props} className={buttonStyles({variant, size})}></button>;
}
