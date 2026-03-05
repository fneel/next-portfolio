import Link from "next/link";

export default function FancyButtonVar({
  href = "/",
  children,
  glowColor = "#d2ff1f",
}) {
  const glowStyle = {
    background: glowColor,
    boxShadow: `
      0 0 5px ${glowColor},
      0 0 15px ${glowColor},
      0 0 30px ${glowColor},
      0 0 60px ${glowColor}
    `,
  };

  return (
    <div className="relative w-[160px] h-[50px] flex justify-center items-center group">
      {/* Bottom glow */}
      <span
        style={glowStyle}
        className="
          absolute left-1/2 -translate-x-1/2 -bottom-[5px]
          w-[30px] h-[10px]
          rounded-[10px]
          transition-all duration-500
          group-hover:bottom-0
          group-hover:w-[80%]
          group-hover:h-1/2
          group-hover:rounded-[30px]
        "
      />

      {/* Top glow */}
      <span
        style={glowStyle}
        className="
          absolute left-1/2 -translate-x-1/2 -top-[5px]
          w-[30px] h-[10px]
          rounded-[10px]
          transition-all duration-500
          group-hover:top-0
          group-hover:w-[80%]
          group-hover:h-1/2
          group-hover:rounded-[30px]
        "
      />

      {/* Main link */}
      <Link
        href={href}
        className="
          absolute inset-0
          flex items-center justify-center
          rounded-[30px]
          px-2
          text-black
          tracking-[1px]
          backdrop-blur-[15px]
          bg-white/5
          border-t border-white/10
          border-b border-white/10
          shadow-[0_15px_15px_rgba(0,0,0,0.3)]
          overflow-hidden
          transition-all duration-500
          group-hover:tracking-[3px]

          before:content-['']
          before:absolute
          before:top-0
          before:left-0
          before:w-1/2
          before:h-full
          before:bg-gradient-to-l
          before:from-white/15
          before:to-transparent
          before:skew-x-[45deg]
          before:transition-all
          before:duration-500
          group-hover:before:translate-x-[200px]
        "
      >
        {children}
      </Link>
    </div>
  );
}
