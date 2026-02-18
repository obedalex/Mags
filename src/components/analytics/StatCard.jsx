import React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "../../lib/utils";

const TREND_STYLES = {
  up: {
    icon: TrendingUp,
    text: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    ring: "ring-emerald-200 dark:ring-emerald-800",
  },
  down: {
    icon: TrendingDown,
    text: "text-rose-700 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    ring: "ring-rose-200 dark:ring-rose-800",
  },
  neutral: {
    icon: null,
    text: "text-muted-foreground",
    bg: "bg-muted",
    ring: "ring-border",
  },
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  change,
  changeLabel = "vs last month",
  trend = "neutral", // 'up' | 'down' | 'neutral'
  className,
}) {
  const style = TREND_STYLES[trend] ?? TREND_STYLES.neutral;
  const TrendIcon = style.icon;
  const showChange = change !== undefined && change !== null && change !== "";

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-4 shadow-sm",
        "flex items-start justify-between gap-4",
        className,
      )}
    >
      <div className="min-w-0">
        <div className="text-sm font-medium text-muted-foreground">{title}</div>
        <div className="mt-1 text-2xl font-semibold text-card-foreground">
          {value}
        </div>

        {showChange && (
          <div className="mt-2 flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset",
                style.bg,
                style.text,
                style.ring,
              )}
            >
              {TrendIcon ? <TrendIcon className="h-3.5 w-3.5" /> : null}
              {change}
            </span>
            <span className="text-xs text-muted-foreground">{changeLabel}</span>
          </div>
        )}
      </div>

      {Icon ? (
        <div className="shrink-0 rounded-lg bg-muted p-2 text-muted-foreground ring-1 ring-inset ring-border">
          <Icon className="h-5 w-5" />
        </div>
      ) : null}
    </div>
  );
}
