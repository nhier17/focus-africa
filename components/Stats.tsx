import {STATS} from "@/constants";
import {AnimatedCounter} from "@/components/AnimatedCounter";

export function Stats() {
    return (
        <section className="relative bg-forest section-padding overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #F7F0E4 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="mx-auto container-custom relative">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
                    {STATS.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col items-center text-center md:items-start md:text-left ${
                                i < STATS.length - 1
                                    ? "md:border-r md:border-cream/10 md:pr-4"
                                    : ""
                            }`}
                        >
              <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-lime leading-none">
                <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                />
              </span>
              <span className="mt-3 text-xs md:text-sm font-medium uppercase tracking-[0.12em] text-cream/70">
                {stat.label}
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
