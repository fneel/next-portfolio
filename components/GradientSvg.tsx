export default function GradientBackground({
  className = "",

  ...props
}) {
  return (
    <div
      className={`${className}  inset-0 w-[500px] h-[500px]
    bg-[radial-gradient(circle,_#9cb0ff_0%,_transparent_63%)]
    blur-xl
    opacity-70`}
      {...props}
    ></div>
  );
}
