// src/components/ui/button.tsx
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import {clsx} from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function Button({
  children,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-3 flex-1 justify-center text-sm rounded-xl bg-[#151718] text-[#A1A1A1] flex items-center gap-x-2 cursor-pointer hover:brightness-75 transition-all",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="text-xl">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="text-xl">{rightIcon}</span>}
    </button>
  );
}
