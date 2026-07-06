import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  /** Light pill behind logo — for dark backgrounds (e.g. sidebar) */
  onDark?: boolean;
};

const sizes = {
  sm: { width: 140, height: 70, className: "h-14 w-auto md:h-16" },
  md: { width: 200, height: 100, className: "h-20 w-auto md:h-24" },
  lg: { width: 280, height: 140, className: "h-28 w-auto md:h-32" },
};

export function Logo({
  className = "",
  size = "lg",
  onDark = false,
}: LogoProps) {
  const { width, height, className: sizeClass } = sizes[size];

  return (
    <div
      className={`flex items-center justify-center bg-transparent ${onDark ? "rounded-xl bg-white px-3 py-2" : ""} ${className}`}
    >
      <Image
        src="/images/asl-sports-logo.png"
        alt="ASL SPORTS"
        width={width}
        height={height}
        priority
        className={`${sizeClass} bg-transparent object-contain`}
      />
    </div>
  );
}
