import StatCard from "@/components/analytics/StatCard";
import ViewsChart from "@/components/analytics/ViewsChart";
import TopProductsList from "@/components/analytics/TopProductsList";
import { Package, Eye, MessageCircle, Users } from "lucide-react";
import { 
  ANALYTICS_STATS, 
  VIEWS_OVER_TIME, 
  TOP_PRODUCTS 
} from "@/data/mockAnalytics";

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Analytics</h1>

      {/* 4 StatCards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value={ANALYTICS_STATS.totalProducts}
          icon={Package}
          trendValue="+12%"
          trend="up"
        />

        <StatCard
          title="Product Views"
          value={ANALYTICS_STATS.totalViews.toLocaleString()}
          icon={Eye}
          trendValue="+23%"
          trend="up"
        />

        <StatCard
          title="WhatsApp Clicks"
          value={ANALYTICS_STATS.whatsappClicks.toLocaleString()}
          icon={MessageCircle}
          trendValue="+18%"
          trend="up"
        />

        <StatCard
          title="Total Visitors"
          value={ANALYTICS_STATS.totalVisitors.toLocaleString()}
          icon={Users}
          trendValue="-5%"
          trend="down"
        />
      </div>

      {/* Chart and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ViewsChart data={VIEWS_OVER_TIME} />
        <TopProductsList products={TOP_PRODUCTS} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
