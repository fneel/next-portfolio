export default function GradientBackground({
  className = "",

  ...props
}) {
  return (
    <div
      className={`${className}  inset-0 w-[400px] h-[400px]
    bg-[radial-gradient(circle,_#D2FF1F_0%,_transparent_63%)]
    blur-xl
    opacity-70`}
      {...props}
    ></div>
  );
}
