import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useOrders } from "../../contexts/OrderContext";
import { useMenu } from "../../contexts/MenuContext";

const COLORS = ["#d4a574", "#2d3e2f", "#8B7355", "#5a7a5c", "#c49464", "#3d5e3f", "#a08060", "#7a9a7c"];

const AdminDashboard = () => {
  const { orders, getTodaysOrders, getTodaysSales, getSalesDataByDay, getTopSellingItems } = useOrders();
  const { menuItems } = useMenu();

  const todaysOrders = getTodaysOrders();
  const todaysSales = getTodaysSales();
  const salesData7 = getSalesDataByDay(7);
  const salesData30 = getSalesDataByDay(30);
  const topItems = getTopSellingItems();
  const pendingOrders = orders.filter((o) => o.status === "Pending" || o.status === "Confirmed" || o.status === "Preparing").length;
  const totalRevenue = orders.filter((o) => o.status !== "Cancelled").reduce((s, o) => s + o.total, 0);

  const categoryData = {};
  orders.filter((o) => o.status !== "Cancelled").forEach((o) => {
    o.items.forEach((item) => {
      const cat = item.category || "Other";
      if (!categoryData[cat]) categoryData[cat] = 0;
      categoryData[cat] += item.quantity;
    });
  });
  const pieData = Object.entries(categoryData)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);

  const stats = [
    {
      title: "Today's Sales",
      value: `৳ ${todaysSales.toLocaleString()}`,
      subtitle: `${todaysOrders.length} orders today`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Total Revenue",
      value: `৳ ${totalRevenue.toLocaleString()}`,
      subtitle: `${orders.filter((o) => o.status !== "Cancelled").length} completed`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Pending Orders",
      value: pendingOrders,
      subtitle: "Needs attention",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      title: "Menu Items",
      value: menuItems.length,
      subtitle: "Products available",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-xl shadow-lg border border-[#2d3e2f]/10">
          <p className="text-xs font-bold text-[#2d3e2f] mb-1">{label}</p>
          {payload.map((p, i) => (
            <p key={i} className="text-xs" style={{ color: p.color }}>
              {p.name === "sales" ? `Sales: ৳ ${p.value.toLocaleString()}` : `Orders: ${p.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
          Welcome back, Admin 👋
        </h1>
        <p className="text-base-content/50 text-sm mt-1">Here's what's happening at Moho today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-transparent to-[#2d3e2f]/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center group-hover:scale-110 shadow-sm transition-transform duration-300`}>
                {stat.icon}
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-[#2d3e2f]">{stat.value}</p>
            <p className="text-xs text-base-content/50 font-medium mt-1">{stat.title}</p>
            <p className="text-[10px] text-base-content/40 mt-0.5">{stat.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Sales Volume Chart - 7 Days */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
                Sales Volume
              </h3>
              <p className="text-xs text-base-content/50">Last 7 days</p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#d4a574]"></span>Sales</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#2d3e2f]"></span>Orders</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={salesData7}>
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4a574" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#d4a574" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e0db" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#888" }} />
              <YAxis tick={{ fontSize: 11, fill: "#888" }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="sales" stroke="#d4a574" strokeWidth={2.5} fill="url(#salesGrad)" name="sales" />
              <Area type="monotone" dataKey="orders" stroke="#2d3e2f" strokeWidth={2} fill="transparent" name="orders" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Orders Chart - Bar */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
                Daily Orders
              </h3>
              <p className="text-xs text-base-content/50">Last 7 days</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={salesData7}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e0db" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#888" }} />
              <YAxis tick={{ fontSize: 11, fill: "#888" }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="orders" fill="#2d3e2f" radius={[8, 8, 0, 0]} name="orders" />
              <Bar dataKey="sales" fill="#d4a574" radius={[8, 8, 0, 0]} name="sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 30 Day Sales Trend + Top Items */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* 30 Day Trend */}
        <div className="xl:col-span-2 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
              Monthly Sales Trend
            </h3>
            <p className="text-xs text-base-content/50">Last 30 days performance</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={salesData30}>
              <defs>
                <linearGradient id="monthGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2d3e2f" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#2d3e2f" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e0db" />
              <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#888" }} interval={3} />
              <YAxis tick={{ fontSize: 11, fill: "#888" }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="sales" stroke="#2d3e2f" strokeWidth={2} fill="url(#monthGrad)" name="sales" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Top Selling Items */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
              Top Selling
            </h3>
            <p className="text-xs text-base-content/50">Most popular items</p>
          </div>
          <div className="space-y-3">
            {topItems.slice(0, 6).map((item, i) => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#f5f0eb] flex items-center justify-center text-xs font-bold text-[#d4a574]">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#2d3e2f] truncate">{item.name}</p>
                  <p className="text-[10px] text-base-content/40">৳ {item.revenue.toLocaleString()} revenue</p>
                </div>
                <span className="text-xs font-bold text-[#2d3e2f] bg-[#f5f0eb] px-2 py-1 rounded-lg">
                  {item.quantity} sold
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
              Recent Orders
            </h3>
            <p className="text-xs text-base-content/50">Latest 5 orders</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-bold uppercase tracking-widest text-base-content/40 border-b border-[#2d3e2f]/5">
                <th className="pb-3 pr-4">Order ID</th>
                <th className="pb-3 pr-4">Customer</th>
                <th className="pb-3 pr-4">Items</th>
                <th className="pb-3 pr-4">Total</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id} className="border-b border-[#2d3e2f]/5 last:border-0">
                  <td className="py-3 pr-4 text-sm font-semibold text-[#2d3e2f]">{order.id}</td>
                  <td className="py-3 pr-4 text-sm text-base-content/70">{order.customerName}</td>
                  <td className="py-3 pr-4 text-sm text-base-content/50">{order.items.length} items</td>
                  <td className="py-3 pr-4 text-sm font-bold text-[#d4a574]">৳ {order.total}</td>
                  <td className="py-3 pr-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      order.status === "Delivered" ? "bg-green-100 text-green-700" :
                      order.status === "Cancelled" ? "bg-red-100 text-red-700" :
                      order.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 text-xs text-base-content/40">
                    {new Date(order.date).toLocaleString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
