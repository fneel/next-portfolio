import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  href?: string;
  children?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  href = "",
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-2 rounded-3xl font-normal transition-all duration-200 w-fit tracking-wide hover:shadow-[0_0_35px_8px_rgba(210,_255,_31,_1)]";

  const variants = {
    primary: "bg-zinc-900 text-zinc-100",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-gray-600",
    tertiary: "bg-zinc-100 text-zinc-900 shadow-md hover:shadow-lg",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
