import { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { useOrders } from "../../contexts/OrderContext";

const COLORS = ["#d4a574", "#2d3e2f", "#8B7355", "#5a7a5c", "#c49464", "#3d5e3f", "#a08060", "#7a9a7c"];

const AdminAnalytics = () => {
  const { orders, getSalesDataByDay, getTopSellingItems, getTodaysSales, getTodaysOrders } = useOrders();
  const [timeRange, setTimeRange] = useState(7);

  const salesData = getSalesDataByDay(timeRange);
  const topItems = getTopSellingItems();
  const todaysSales = getTodaysSales();
  const todaysOrders = getTodaysOrders();

  const totalSales = salesData.reduce((s, d) => s + d.sales, 0);
  const totalOrders = salesData.reduce((s, d) => s + d.orders, 0);
  const avgOrderValue = totalOrders > 0 ? Math.round(totalSales / totalOrders) : 0;
  const bestDay = salesData.reduce((best, d) => (d.sales > best.sales ? d : best), { sales: 0, name: "-" });

  // Status distribution for pie chart
  const statusCounts = {};
  orders.forEach((o) => {
    statusCounts[o.status] = (statusCounts[o.status] || 0) + 1;
  });
  const statusData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
  const statusColors = {
    Pending: "#EAB308",
    Confirmed: "#3B82F6",
    Preparing: "#F97316",
    Ready: "#8B5CF6",
    Delivered: "#22C55E",
    Cancelled: "#EF4444",
  };

  // Revenue by category
  const catRevenue = {};
  orders.filter((o) => o.status !== "Cancelled").forEach((o) => {
    o.items.forEach((item) => {
      const cat = item.category || "Other";
      if (!catRevenue[cat]) catRevenue[cat] = 0;
      catRevenue[cat] += item.price * item.quantity;
    });
  });
  const catData = Object.entries(catRevenue)
    .map(([name, revenue]) => ({ name, revenue }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 8);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-xl shadow-lg border border-[#2d3e2f]/10">
          <p className="text-xs font-bold text-[#2d3e2f] mb-1">{label}</p>
          {payload.map((p, i) => (
            <p key={i} className="text-xs" style={{ color: p.color }}>
              {p.name}: {typeof p.value === "number" && p.name !== "orders" ? `৳ ${p.value.toLocaleString()}` : p.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
            Sales Analytics
          </h1>
          <p className="text-base-content/50 text-sm mt-1">Track your restaurant's performance</p>
        </div>
        <div className="flex gap-2">
          {[7, 14, 30].map((days) => (
            <button
              key={days}
              onClick={() => setTimeRange(days)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                timeRange === days
                  ? "bg-[#2d3e2f] text-white shadow-lg"
                  : "bg-white text-[#2d3e2f] border border-[#2d3e2f]/10 hover:border-[#d4a574]"
              }`}
            >
              {days}D
            </button>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Sales", value: `৳ ${totalSales.toLocaleString()}`, sub: `${timeRange}-day total`, color: "text-green-600" },
          { label: "Total Orders", value: totalOrders, sub: `${timeRange}-day total`, color: "text-blue-600" },
          { label: "Avg. Order Value", value: `৳ ${avgOrderValue}`, sub: "Per order", color: "text-purple-600" },
          { label: "Best Day", value: bestDay.name, sub: `৳ ${bestDay.sales.toLocaleString()}`, color: "text-[#d4a574]" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-[#2d3e2f]/5">
            <p className="text-xs text-base-content/40 font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-[10px] text-base-content/40 mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Main Sales Chart */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
              Revenue Over Time
            </h3>
            <p className="text-xs text-base-content/50">Sales volume trend — {timeRange} days</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={salesData}>
            <defs>
              <linearGradient id="analyticsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d4a574" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#d4a574" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e0db" />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#888" }} interval={timeRange > 14 ? 3 : 0} />
            <YAxis tick={{ fontSize: 11, fill: "#888" }} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="sales" stroke="#d4a574" strokeWidth={2.5} fill="url(#analyticsGrad)" name="sales" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Orders Chart + Status Pie */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Orders Bar Chart */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
              Orders Per Day
            </h3>
            <p className="text-xs text-base-content/50">Daily order count — {timeRange} days</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e0db" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#888" }} interval={timeRange > 14 ? 3 : 0} />
              <YAxis tick={{ fontSize: 11, fill: "#888" }} allowDecimals={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="orders" fill="#2d3e2f" radius={[6, 6, 0, 0]} name="orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Order Status Distribution */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
              Order Status
            </h3>
            <p className="text-xs text-base-content/50">Distribution of all orders</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
              >
                {statusData.map((entry) => (
                  <Cell key={entry.name} fill={statusColors[entry.name] || "#ccc"} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [value, name]} />
              <Legend
                formatter={(value) => <span className="text-xs font-semibold text-[#2d3e2f]">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Items + Category Revenue */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Top Items Horizontal Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
              Top Selling Items
            </h3>
            <p className="text-xs text-base-content/50">By quantity sold</p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={topItems.slice(0, 8)} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e0db" />
              <XAxis type="number" tick={{ fontSize: 11, fill: "#888" }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 10, fill: "#888" }} width={130} />
              <Tooltip formatter={(value, name) => [name === "quantity" ? `${value} sold` : `৳ ${value.toLocaleString()}`, name]} />
              <Bar dataKey="quantity" fill="#d4a574" radius={[0, 6, 6, 0]} name="quantity" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Revenue */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
              Revenue by Category
            </h3>
            <p className="text-xs text-base-content/50">Top performing categories</p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={catData}
                cx="50%"
                cy="50%"
                outerRadius={110}
                dataKey="revenue"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                labelLine
              >
                {catData.map((_, i) => (
                  <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `৳ ${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
