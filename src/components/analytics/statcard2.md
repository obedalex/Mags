import React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "../../lib/utils";

const TREND_STYLES = {
  up: {
    icon: TrendingUp,
    text: "text-emerald-700",
    bg: "bg-emerald-50",
    ring: "ring-emerald-200",
  },
  down: {
    icon: TrendingDown,
    text: "text-rose-700",
    bg: "bg-rose-50",
    ring: "ring-rose-200",
  },
  neutral: {
    icon: null,
    text: "text-gray-700",
    bg: "bg-gray-50",
    ring: "ring-gray-200",
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
        "rounded-xl border bg-white p-4 shadow-sm",
        "flex items-start justify-between gap-4",
        className,
      )}
    >
      <div className="min-w-0">
        <div className="text-sm font-medium text-gray-600">{title}</div>
        <div className="mt-1 text-2xl font-semibold text-gray-900">{value}</div>

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
            <span className="text-xs text-gray-500">{changeLabel}</span>
          </div>
        )}
      </div>

      {Icon ? (
        <div className="shrink-0 rounded-lg bg-gray-50 p-2 text-gray-700 ring-1 ring-inset ring-gray-200">
          <Icon className="h-5 w-5" />
        </div>
      ) : null}
    </div>
  );
}
