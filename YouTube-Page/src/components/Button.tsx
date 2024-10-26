import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

//create new const which uses cva (which is a function which creates CSS class names based on diff variant and states)
/*
hover: bg-secondary-hover -> applies when button is hovered
transition-colors -> adds a transition effect to color changes
*/
const buttonStyles = cva(["hover: bg-secondary-hover", "transition-colors"], {
  //create "variants"(props) - basically new class names, when added to "Button" they apply which ever properties are attached
  // --> usually done to get rid of repetitive class names/styles
  //ex: <Button variant: "ghost" ></Button> --> applies "ghost properties from "variant" (not variants)
  variants: {
    //A sub storage for different variants -> variant = ""
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover: bg-grey-100"],
      dark:["bg-secondary-dark","hover: bg-secondary-dark-hover", "text-secondary"],
    },

    //A sub storage for different sizes -> size = ""
    size: {
      default: ["rounded", "p-2"],

      //creates round icon
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },

  //default values for variant and size sub storages
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

//Define "ButtonProps" type which extends VariantProps based on "buttonStyles" and def props of "Button" element
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

//export "Button" component (<Button></Button>) that accepts "variant", "size", reg tailwind className and other button props
export function Button({ variant, size, className, ...props }: ButtonProps) {
  //return a button element with spreads(...props) reaming props and merge class names
  return (
    <button
      //takes in all remaining properties that weren't destructured in function parameter  of (variant, size, className)
      //and adds (if applied) to button element ex: wanting to add "onClick" ...props would take it in
      {...props}

      //use twMerge to make sure styles don't overwrite one another
      /*
      buttonStyles({variant, size}) --> applies classes from "buttonStyles"
      className --> applies any other classes (regular like bg-color)
      */ 
      className={twMerge(buttonStyles({ variant, size }), className)}
    ></button>
  );
}
