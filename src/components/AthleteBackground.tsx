const HOME_BACKGROUND = "/images/home-background.png";

export function AthleteBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 min-h-full bg-asl-gray bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${HOME_BACKGROUND}')` }}
      aria-hidden
    />
  );
}
