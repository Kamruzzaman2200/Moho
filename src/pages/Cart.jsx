import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import useAuth from "../hooks/useAuth";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#f5f0eb] min-h-screen pt-8 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center py-24">
            <div className="w-24 h-24 bg-[#2d3e2f]/5 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#2d3e2f]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#2d3e2f] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              Your Cart is Empty
            </h2>
            <p className="text-base-content/50 mb-8">
              Looks like you haven't added anything to your cart yet. Browse our menu to find something delicious!
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2d3e2f] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#d4a574] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f0eb] min-h-screen pt-8 pb-20">
      {/* Header */}
      <div className="relative bg-[#2d3e2f] py-12 sm:py-16 overflow-hidden shadow-xl mb-10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4a574] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#d4a574] text-xs sm:text-sm uppercase tracking-[0.4em] mb-3 font-semibold">Your Selection</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md" style={{ fontFamily: "'Georgia', serif" }}>
            Shopping Cart
          </h1>
          <p className="text-white/60 text-sm">{getCartCount()} item{getCartCount() !== 1 ? "s" : ""} in your cart</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#2d3e2f]/5 flex gap-4 sm:gap-6 items-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#f5f0eb]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#2d3e2f] truncate" style={{ fontFamily: "'Georgia', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[#d4a574] font-bold text-sm mt-1">{item.price}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg bg-[#f5f0eb] hover:bg-[#2d3e2f] hover:text-white text-[#2d3e2f] flex items-center justify-center transition-colors font-bold text-lg"
                    >
                      −
                    </button>
                    <span className="text-[#2d3e2f] font-bold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-[#f5f0eb] hover:bg-[#2d3e2f] hover:text-white text-[#2d3e2f] flex items-center justify-center transition-colors font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-3">
                  <p className="text-[#2d3e2f] font-bold text-lg">
                    ৳ {(parseFloat(item.price.replace(/[^\d.]/g, "")) * item.quantity).toFixed(0)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 transition-colors p-1"
                    title="Remove"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-red-400 hover:text-red-600 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 mt-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear All Items
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#2d3e2f]/5 sticky top-24">
              <h3 className="text-xl font-bold text-[#2d3e2f] mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-base-content/60">Subtotal ({getCartCount()} items)</span>
                  <span className="font-semibold text-[#2d3e2f]">৳ {getCartTotal().toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-base-content/60">Delivery Fee</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-[#2d3e2f]/10 pt-3 flex justify-between">
                  <span className="font-bold text-[#2d3e2f]">Total</span>
                  <span className="font-bold text-xl text-[#d4a574]">৳ {getCartTotal().toFixed(0)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  if (!user) {
                    navigate("/login", { state: { from: { pathname: "/checkout" } } });
                  } else {
                    navigate("/checkout");
                  }
                }}
                className="w-full bg-[#2d3e2f] hover:bg-[#1a251c] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-lg shadow-[#2d3e2f]/20 hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="w-full mt-4 border-2 border-[#2d3e2f] text-[#2d3e2f] py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#2d3e2f] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
