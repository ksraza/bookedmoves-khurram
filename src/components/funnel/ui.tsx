import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "paper" | "accent";
}) {
  const color =
    tone === "paper" ? "text-paper/70" : tone === "accent" ? "text-accent" : "text-slate";
  const dot = tone === "paper" ? "bg-green" : "bg-accent";
  return (
    <span className={`eyebrow ${color}`}>
      <span className={`inline-block h-[7px] w-[7px] ${dot}`} />
      {children}
    </span>
  );
}

export function CtaButton({
  to,
  children,
  variant = "solid",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "onDark";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center border-2 px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px]";
  const styles =
    variant === "solid"
      ? "border-ink bg-ink text-paper hover:shadow-[6px_6px_0_0_var(--accent)]"
      : variant === "ghost"
        ? "border-ink bg-transparent text-ink hover:shadow-[6px_6px_0_0_var(--accent)]"
        : "border-paper bg-paper text-ink hover:shadow-[6px_6px_0_0_var(--green)]";
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function NumBox({ n, tone = "ink" }: { n: string; tone?: "ink" | "paper" }) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 font-mono text-sm ${
        tone === "paper" ? "border-paper/40 text-paper" : "border-ink text-ink"
      }`}
    >
      {n}
    </span>
  );
}

export function Check({ children, tone = "ink" }: { children: ReactNode; tone?: "ink" | "paper" }) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <span className="mt-[2px] font-mono text-green">✓</span>
      <span className={tone === "paper" ? "text-paper/85" : "text-slate"}>{children}</span>
    </li>
  );
}

export function StepTag({ children }: { children: ReactNode }) {
  return (
    <span className="mono-label border border-line bg-paper-2 px-2 py-1 text-slate">
      {children}
    </span>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

type Row = { time: string; label: string; status: string };

export function Manifest({
  title,
  rows,
  total,
  compact = false,
}: {
  title: string;
  rows: Row[];
  total?: string;
  compact?: boolean;
}) {
  return (
    <div className="border-2 border-ink bg-white stamp">
      <div className="flex items-center justify-between border-b-2 border-ink px-4 py-3">
        <span className="mono-label text-ink">{title}</span>
        <span className="eyebrow text-accent-dark">
          <span className="live-dot inline-block h-[7px] w-[7px] rounded-full bg-green" />
          Live
        </span>
      </div>
      <ul className="divide-y divide-dashed divide-line">
        {rows.map((r) => (
          <li
            key={r.label}
            className={`flex items-center justify-between gap-4 px-4 ${compact ? "py-2.5" : "py-3.5"}`}
          >
            <span className="font-mono text-[0.72rem] text-ink">
              {r.time && <span className="text-slate">{r.time} — </span>}
              {r.label}
            </span>
            <span className="mono-label shrink-0 border border-accent bg-accent/10 px-2 py-1 text-accent-dark">
              {r.status}
            </span>
          </li>
        ))}
      </ul>
      {total && (
        <div className="flex items-center justify-between border-t-2 border-ink bg-paper-2 px-4 py-3">
          <span className="mono-label text-slate">Total elapsed</span>
          <span className="font-mono text-sm font-semibold text-ink">{total}</span>
        </div>
      )}
    </div>
  );
}

export const MANIFEST_ROWS: Row[] = [
  { time: "0:00", label: "New lead, 3-bed local move", status: "Captured" },
  { time: "0:04", label: "Instant notification sent", status: "Notified" },
  { time: "0:11", label: "Outbound call placed", status: "Connected" },
  { time: "0:19", label: "Quote sent by email", status: "Delivered" },
  { time: "", label: "Job confirmed for Sat, 14:00", status: "Booked ✓" },
];

