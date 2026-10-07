import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useOrders } from "../contexts/OrderContext";
import useAuth from "../hooks/useAuth";

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    phone: "",
    address: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);

    // Simulate processing delay
    setTimeout(() => {
      const order = addOrder({
        customerName: formData.name,
        customerEmail: user?.email || "guest@email.com",
        items: cartItems.map((item) => ({
          title: item.title,
          price: parseFloat(item.price.replace(/[^\d.]/g, "")) || 0,
          quantity: item.quantity,
        })),
        total: getCartTotal(),
        address: formData.address,
        phone: formData.phone,
        notes: formData.notes,
      });
      clearCart();
      setOrderPlaced(order);
      setIsSubmitting(false);
    }, 1500);
  };

  // Order success screen
  if (orderPlaced) {
    return (
      <div className="bg-[#f5f0eb] min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-[#2d3e2f]/5">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#2d3e2f] mb-3" style={{ fontFamily: "'Georgia', serif" }}>
            Order Placed!
          </h2>
          <p className="text-base-content/60 mb-2">Your order has been successfully placed.</p>
          <div className="bg-[#f5f0eb] rounded-xl p-4 mb-6">
            <p className="text-sm text-base-content/60">Order ID</p>
            <p className="text-2xl font-bold text-[#d4a574]">{orderPlaced.id}</p>
          </div>
          <p className="text-sm text-base-content/50 mb-8">We'll start preparing your food right away. Track your order from "My Orders".</p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/my-orders")}
              className="w-full bg-[#2d3e2f] text-white py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#d4a574] transition-colors"
            >
              Track My Order
            </button>
            <button
              onClick={() => navigate("/products")}
              className="w-full border-2 border-[#2d3e2f] text-[#2d3e2f] py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#2d3e2f] hover:text-white transition-colors"
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="bg-[#f5f0eb] min-h-screen pt-8 pb-20">
      {/* Header */}
      <div className="relative bg-[#2d3e2f] py-12 sm:py-16 overflow-hidden shadow-xl mb-10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4a574] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#d4a574] text-xs sm:text-sm uppercase tracking-[0.4em] mb-3 font-semibold">Almost Done</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md" style={{ fontFamily: "'Georgia', serif" }}>
            Checkout
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Delivery Form */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#2d3e2f]/5">
              <h3 className="text-xl font-bold text-[#2d3e2f] mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Delivery Details
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors bg-[#f5f0eb]/30"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX-XXXXXX"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors bg-[#f5f0eb]/30"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Full delivery address"
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors bg-[#f5f0eb]/30 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#2d3e2f] mb-1.5 uppercase tracking-wider">
                    Special Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special instructions..."
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-[#2d3e2f]/10 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors bg-[#f5f0eb]/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2d3e2f] hover:bg-[#d4a574] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Placing Order...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Place Order — ৳ {getCartTotal().toFixed(0)}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#2d3e2f]/5 sticky top-24">
              <h3 className="text-xl font-bold text-[#2d3e2f] mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Your Order
              </h3>
              <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#f5f0eb]">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#2d3e2f] truncate">{item.title}</p>
                      <p className="text-xs text-base-content/50">x{item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-[#2d3e2f]">
                      ৳ {(parseFloat(item.price.replace(/[^\d.]/g, "")) * item.quantity).toFixed(0)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#2d3e2f]/10 mt-6 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-base-content/60">Subtotal</span>
                  <span className="font-semibold">৳ {getCartTotal().toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-base-content/60">Delivery</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between border-t border-[#2d3e2f]/10 pt-3 mt-2">
                  <span className="font-bold text-[#2d3e2f]">Total</span>
                  <span className="font-bold text-xl text-[#d4a574]">৳ {getCartTotal().toFixed(0)}</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-[#f5f0eb] rounded-xl">
                <p className="text-xs text-base-content/60 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Cash on Delivery — Pay when your food arrives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
