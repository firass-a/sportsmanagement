export function CornerDecorations() {
  return (
    <>
      <div
        className="pointer-events-none absolute start-0 top-0 h-48 w-48 md:h-64 md:w-64"
        aria-hidden
      >
        <div className="absolute start-0 top-0 h-32 w-32 rounded-br-[100%] bg-asl-navy md:h-40 md:w-40" />
        <div className="absolute start-8 top-8 h-24 w-24 rounded-br-[100%] bg-asl-orange md:start-10 md:top-10 md:h-32 md:w-32" />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 end-0 h-48 w-48 md:h-64 md:w-64"
        aria-hidden
      >
        <div className="absolute bottom-0 end-0 h-32 w-32 rounded-tl-[100%] bg-asl-orange md:h-40 md:w-40" />
        <div className="absolute bottom-8 end-8 h-24 w-24 rounded-tl-[100%] bg-asl-navy md:bottom-10 md:end-10 md:h-32 md:w-32" />
      </div>
    </>
  );
}
