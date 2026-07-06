import Image from "next/image";

const ALGERIA_FLAG = "/images/algeria-flag.png";

export function NationalEmblem({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-2 ring-white/25 ${className}`}
      aria-hidden
    >
      <Image
        src={ALGERIA_FLAG}
        alt=""
        fill
        className="object-cover"
        sizes="96px"
      />
    </div>
  );
}
