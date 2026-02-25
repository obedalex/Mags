import React from "react";


// this line takes the product with the most views 
const ViewsChart = ({ data }) => {
  const maxViews = Math.max(...data.map((d) => d.views));

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-lg font-semibold text-card-foreground mb-6">
        Views Over Time
      </h2>

      <div className="flex items-end justify-between gap-4 h-64">
        {data.map((day) => {
          const heightPercent = (day.views / maxViews) * 100;

          return (
            <div
              key={day.date}
              className="flex-1 flex flex-col items-center gap-2"
            >
              {/* Value on top */}
              <span className="text-xs font-medium text-muted-foreground">
                {day.views}
              </span>

              {/* Bar */}
              <div
                className="w-full bg-muted rounded-t-lg relative flex items-end"
                style={{ height: "100%" }}
              >
                <div
                  className="w-full bg-primary rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${heightPercent}%` }}
                />
              </div>

              {/* Day label */}
              <span className="text-xs font-medium text-card-foreground">
                {day.date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewsChart;
