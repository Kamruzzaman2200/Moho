import { useState } from "react";
import { useOrders } from "../../contexts/OrderContext";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Confirmed: "bg-blue-100 text-blue-700 border-blue-200",
  Preparing: "bg-orange-100 text-orange-700 border-orange-200",
  Ready: "bg-purple-100 text-purple-700 border-purple-200",
  Delivered: "bg-green-100 text-green-700 border-green-200",
  Cancelled: "bg-red-100 text-red-700 border-red-200",
};

const allStatuses = ["Pending", "Confirmed", "Preparing", "Ready", "Delivered", "Cancelled"];

const AdminOrders = () => {
  const { orders, updateOrderStatus } = useOrders();
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));

  const filteredOrders = sortedOrders.filter((order) => {
    const matchStatus = filterStatus === "All" || order.status === filterStatus;
    const matchSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  const statusCounts = {};
  orders.forEach((o) => {
    statusCounts[o.status] = (statusCounts[o.status] || 0) + 1;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
          Order Management
        </h1>
        <p className="text-base-content/50 text-sm mt-1">{orders.length} total orders</p>
      </div>

      {/* Status Filter Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilterStatus("All")}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
            filterStatus === "All"
              ? "bg-[#2d3e2f] text-white shadow-lg"
              : "bg-white text-[#2d3e2f] border border-[#2d3e2f]/10 hover:border-[#d4a574]"
          }`}
        >
          All ({orders.length})
        </button>
        {allStatuses.map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              filterStatus === status
                ? "bg-[#2d3e2f] text-white shadow-lg"
                : "bg-white text-[#2d3e2f] border border-[#2d3e2f]/10 hover:border-[#d4a574]"
            }`}
          >
            {status} ({statusCounts[status] || 0})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/30 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search by order ID, customer name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none bg-white text-sm"
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#2d3e2f]/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-bold uppercase tracking-widest text-base-content/40 bg-[#f5f0eb]/50 border-b border-[#2d3e2f]/5">
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Items</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.slice(0, 50).map((order) => (
                <tr key={order.id} className="border-b border-[#2d3e2f]/5 last:border-0 hover:bg-[#f5f0eb]/30 transition-colors">
                  <td className="p-4 text-sm font-semibold text-[#2d3e2f]">{order.id}</td>
                  <td className="p-4">
                    <div>
                      <p className="text-sm font-semibold text-[#2d3e2f]">{order.customerName}</p>
                      <p className="text-xs text-base-content/40">{order.customerEmail}</p>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-base-content/60">{order.items.length} items</td>
                  <td className="p-4 text-sm font-bold text-[#d4a574]">৳ {order.total.toLocaleString()}</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer outline-none ${statusColors[order.status]}`}
                    >
                      {allStatuses.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 text-xs text-base-content/40">
                    {new Date(order.date).toLocaleString("en-US", {
                      month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
                    })}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="p-2 hover:bg-[#f5f0eb] text-[#2d3e2f]/50 hover:text-[#d4a574] rounded-lg transition-colors"
                      title="View Details"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredOrders.length === 0 && (
          <div className="text-center py-16">
            <p className="text-base-content/40 text-sm">No orders found.</p>
          </div>
        )}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedOrder(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 right-4 p-1.5 hover:bg-red-50 text-base-content/40 hover:text-red-500 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#f5f0eb] rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2d3e2f]" style={{ fontFamily: "'Georgia', serif" }}>
                  {selectedOrder.id}
                </h3>
                <p className="text-xs text-base-content/50">
                  {new Date(selectedOrder.date).toLocaleString("en-US", {
                    weekday: "long", year: "numeric", month: "long", day: "numeric",
                    hour: "2-digit", minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-[#f5f0eb] rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-2">Customer</p>
                <p className="text-sm font-semibold text-[#2d3e2f]">{selectedOrder.customerName}</p>
                <p className="text-xs text-base-content/50">{selectedOrder.customerEmail}</p>
                <p className="text-xs text-base-content/50">{selectedOrder.phone}</p>
                <p className="text-xs text-base-content/50 mt-1">{selectedOrder.address}</p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-base-content/40 mb-3">Order Items</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-[#2d3e2f]/5 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-[#2d3e2f]">{item.title}</p>
                        <p className="text-xs text-base-content/40">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-bold text-[#d4a574]">৳ {item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center bg-[#2d3e2f] text-white rounded-xl p-4">
                <span className="font-bold text-sm">Total</span>
                <span className="text-xl font-bold">৳ {selectedOrder.total.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-base-content/40">Status:</span>
                <select
                  value={selectedOrder.status}
                  onChange={(e) => {
                    updateOrderStatus(selectedOrder.id, e.target.value);
                    setSelectedOrder({ ...selectedOrder, status: e.target.value });
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-bold border cursor-pointer outline-none ${statusColors[selectedOrder.status]}`}
                >
                  {allStatuses.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
