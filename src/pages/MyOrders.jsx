import { Link } from "react-router-dom";
import { useOrders } from "../contexts/OrderContext";
import useAuth from "../hooks/useAuth";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-blue-100 text-blue-700",
  Preparing: "bg-orange-100 text-orange-700",
  Ready: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

const statusIcons = {
  Pending: "⏳",
  Confirmed: "✓",
  Preparing: "🍳",
  Ready: "📦",
  Delivered: "✅",
  Cancelled: "✗",
};

const MyOrders = () => {
  const { getOrdersByUser } = useOrders();
  const { user } = useAuth();
  const userOrders = getOrdersByUser(user?.email).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="bg-[#f5f0eb] min-h-screen pt-8 pb-20">
      {/* Header */}
      <div className="relative bg-[#2d3e2f] py-12 sm:py-16 overflow-hidden shadow-xl mb-10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4a574] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#d4a574] text-xs sm:text-sm uppercase tracking-[0.4em] mb-3 font-semibold">Your History</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md" style={{ fontFamily: "'Georgia', serif" }}>
            My Orders
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {userOrders.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-[#2d3e2f]/5 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#2d3e2f]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#2d3e2f] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              No Orders Yet
            </h2>
            <p className="text-base-content/50 mb-8">You haven't placed any orders. Browse our menu to get started!</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2d3e2f] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#d4a574] transition-colors"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {userOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#2d3e2f]/5 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs text-base-content/40 font-semibold uppercase tracking-widest">{order.id}</p>
                    <p className="text-xs text-base-content/50 mt-1">
                      {new Date(order.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${statusColors[order.status]}`}>
                      {statusIcons[order.status]} {order.status}
                    </span>
                    <span className="text-lg font-bold text-[#d4a574]">৳ {order.total}</span>
                  </div>
                </div>
                <div className="border-t border-[#2d3e2f]/5 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {order.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f5f0eb] text-[#2d3e2f] px-3 py-1.5 rounded-lg text-xs font-medium"
                      >
                        {item.title} × {item.quantity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
