import Reveal from "./Reveal";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-body text-base leading-relaxed text-ev-text/60">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
