import React from "react";
import StatCard from "@/components/analytics/StatCard";
import ViewsChart from "@/components/analytics/ViewsChart";
import { DollarSign } from "lucide-react";

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Revenue"
          value="$12,430"
          change="+12.4%"
          trend="up"
          icon={DollarSign}
        />
        <StatCard
          title="Product views"
          value="312"
          change="-3.1%"
          trend="down"
        />
        <StatCard
          title="WhatsApp Clicks"
          value="8,120"
          change="+5.0%"
          trend="up"
        />
        <StatCard title="Visitors" value="8,120" change="+5.0%" trend="up" />
      </div>
      <ViewsChart />
    </div>
  );
};

export default AnalyticsPage;
