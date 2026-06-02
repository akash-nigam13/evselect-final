/**
 * Decorative animated aurora glow backdrop (pure CSS, no JS).
 * Place inside a `relative overflow-hidden` parent with negative z-index.
 */
export default function Aurora({
  className = "",
  variant = "brand",
}: {
  className?: string;
  variant?: "brand" | "iris" | "dual";
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand/20 blur-[120px] animate-float-slow" />
      {variant !== "brand" && (
        <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-iris/20 blur-[120px] animate-float" />
      )}
      {variant === "dual" && (
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-volt/10 blur-[120px] animate-float-slow" />
      )}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
    </div>
  );
}
