import Link from "next/link";

export default function Button({
  href = "",
  children = "",
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-2 rounded-3xl font-medium transition-all duration-200 w-fit tracking-wide";

  const variants = {
    primary: "bg-zinc-900 text-zinc-100 hover:shadow-lg",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-gray-600",
    tertiary: "bg-zinc-100 text-zinc-900 shadow-md   hover:shadow-lg",
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
