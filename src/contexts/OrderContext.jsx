import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext(null);

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};

// Generate demo sales data for the past 30 days
const generateDemoOrders = () => {
  const orders = [];
  const statuses = ["Pending", "Confirmed", "Preparing", "Ready", "Delivered", "Cancelled"];
  const menuItems = [
    { title: "Moho Special Platter", price: 299 },
    { title: "Moho Special Ramen", price: 350 },
    { title: "Chicken Burger", price: 120 },
    { title: "BBQ Wings (6 pcs)", price: 199 },
    { title: "Moho Special Burger", price: 250 },
    { title: "Crispy Chicken Rice Bowl", price: 130 },
    { title: "French Fries", price: 150 },
    { title: "Virgin Mojito", price: 149 },
    { title: "Brownie Bliss with Vanilla Ice Cream", price: 249 },
    { title: "Chicken Momo (6 pcs)", price: 150 },
    { title: "Spicy Korean Ramen", price: 250 },
    { title: "Creamy Alfredo Pasta", price: 200 },
  ];
  const customerNames = [
    "Rahim Ahmed", "Fatima Begum", "Karim Khan", "Nusrat Jahan",
    "Tariq Islam", "Sabina Akter", "Imran Hossain", "Maliha Rahman",
    "Sakib Ali", "Tasnia Sultana", "Arif Hasan", "Sumaya Khatun",
  ];

  for (let d = 29; d >= 0; d--) {
    const date = new Date();
    date.setDate(date.getDate() - d);
    const ordersPerDay = Math.floor(Math.random() * 8) + 3;

    for (let i = 0; i < ordersPerDay; i++) {
      const numItems = Math.floor(Math.random() * 4) + 1;
      const items = [];
      for (let j = 0; j < numItems; j++) {
        const item = menuItems[Math.floor(Math.random() * menuItems.length)];
        const qty = Math.floor(Math.random() * 3) + 1;
        items.push({ ...item, quantity: qty });
      }
      const total = items.reduce((s, it) => s + it.price * it.quantity, 0);
      const hour = Math.floor(Math.random() * 12) + 10;
      const minute = Math.floor(Math.random() * 60);
      const orderDate = new Date(date);
      orderDate.setHours(hour, minute, 0, 0);

      orders.push({
        id: `ORD-${String(orders.length + 1001).padStart(4, "0")}`,
        customerName: customerNames[Math.floor(Math.random() * customerNames.length)],
        customerEmail: `customer${Math.floor(Math.random() * 100)}@email.com`,
        items,
        total,
        status: d === 0 ? statuses[Math.floor(Math.random() * 4)] : (Math.random() > 0.1 ? "Delivered" : "Cancelled"),
        date: orderDate.toISOString(),
        address: "Kalibari Lake Road, Bhola",
        phone: `+8801${Math.floor(Math.random() * 900000000 + 100000000)}`,
      });
    }
  }
  return orders;
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("moho_orders");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) return parsed;
      }
      const demo = generateDemoOrders();
      localStorage.setItem("moho_orders", JSON.stringify(demo));
      return demo;
    } catch {
      const demo = generateDemoOrders();
      localStorage.setItem("moho_orders", JSON.stringify(demo));
      return demo;
    }
  });

  useEffect(() => {
    localStorage.setItem("moho_orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${String(orders.length + 1001).padStart(4, "0")}`,
      ...orderData,
      status: "Pending",
      date: new Date().toISOString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const getOrdersByUser = (email) => {
    return orders.filter((o) => o.customerEmail === email);
  };

  const getTodaysOrders = () => {
    const today = new Date().toDateString();
    return orders.filter((o) => new Date(o.date).toDateString() === today);
  };

  const getTodaysSales = () => {
    return getTodaysOrders()
      .filter((o) => o.status !== "Cancelled")
      .reduce((sum, o) => sum + o.total, 0);
  };

  const getSalesDataByDay = (days = 7) => {
    const data = [];
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toDateString();
      const dayOrders = orders.filter(
        (o) => new Date(o.date).toDateString() === dateStr && o.status !== "Cancelled"
      );
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      data.push({
        name: `${dayNames[date.getDay()]} ${date.getDate()} ${monthNames[date.getMonth()]}`,
        sales: dayOrders.reduce((s, o) => s + o.total, 0),
        orders: dayOrders.length,
      });
    }
    return data;
  };

  const getTopSellingItems = () => {
    const itemMap = {};
    orders
      .filter((o) => o.status !== "Cancelled")
      .forEach((o) => {
        o.items.forEach((item) => {
          if (!itemMap[item.title]) {
            itemMap[item.title] = { name: item.title, quantity: 0, revenue: 0 };
          }
          itemMap[item.title].quantity += item.quantity;
          itemMap[item.title].revenue += item.price * item.quantity;
        });
      });
    return Object.values(itemMap)
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 8);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
        getOrdersByUser,
        getTodaysOrders,
        getTodaysSales,
        getSalesDataByDay,
        getTopSellingItems,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
