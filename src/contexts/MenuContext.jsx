import { createContext, useContext, useState, useEffect } from "react";

// Starters
import frenchFries from "../assets/Menu/French Fries.png";
import chickenFry from "../assets/Menu/Chicken Fry (1 pcs).png";
import bbqWings from "../assets/Menu/BBQ Wings (6 pcs).png";
import crispyWings from "../assets/Menu/Crispy Wings (6 pcs).png";
import chickenLolipop from "../assets/Menu/Chicken Lolipop (6 pcs).png";
import friedWonton from "../assets/Menu/Fride Wonton (6 pcs).png";
import cheezyNachos from "../assets/Menu/Cheezy Nachos.png";
import thaiFriedChicken from "../assets/Menu/Thai Fried Chicken (4 pcs).png";

// Soup
import thaiThickSoup from "../assets/Menu/Thai Thick Soup.png";
import creamMushroomSoup from "../assets/Menu/Cream of Mushroom Soup.png";

// Burger
import chickenBurger from "../assets/Menu/Chicken Burger.png";
import chickenCheeseBurger from "../assets/Menu/Chicken Cheese Burger.png";
import bbqBurger from "../assets/Menu/BBQ Burger.png";
import mohoSpecialBurger from "../assets/Menu/Moho Special Burger (with Fries & Coke).png";
import chickenSandwich from "../assets/Menu/Chicken Sandwich (with Fries & Coke).png";

// Momos
import chickenMomo from "../assets/Menu/Chicken Momo (6 pcs).png";
import cheeseMomo from "../assets/Menu/Cheese Momo (6 pcs).png";
import chiliOilMomo from "../assets/Menu/Chili Oil Momo (6 pcs).png";

// Meatbox
import chickenMeatbox from "../assets/Menu/Chicken Meatbox.png";
import smokySausageMeatbox from "../assets/Menu/Smoky Sausage Meatbox.png";
import mohoSpecialBBQMeatbox from "../assets/Menu/Moho Special BBQ Meatbox.png";

// Pasta
import pastaBasta from "../assets/Menu/Pasta Basta.png";
import creamyAlfredoPasta from "../assets/Menu/Creamy Alfredo Pasta.png";
import mohoSpecialPasta from "../assets/Menu/Moho Special Pasta.png";

// Ramen
import spicyKoreanRamen from "../assets/Menu/Spicy Korean Ramen.png";
import heroshiRamen from "../assets/Menu/Heroshi Ramen.png";
import mohoSpecialRamen from "../assets/Menu/Moho Special Ramen.png";

// Chowmein
import regularChowmein from "../assets/Menu/Regular Chowmein.png";
import spicyChickenChowmein from "../assets/Menu/Spicy Chicken Chowmein.png";
import prawnChowmein from "../assets/Menu/Prawn Chowmein.png";
import mohoSpecialChowmein from "../assets/Menu/Moho Special Chowmein.png";

// Rice Bowls
import crispyChickenRiceBowl from "../assets/Menu/Crispy Chicken Rice Bowl.png";
import bbqChickenRiceBowl from "../assets/Menu/BBQ Chicken Rice Bowl.png";
import mohoSpecialRiceBowl from "../assets/Menu/Moho Special Rice Bowl.png";

// Set Menus
import mohoSet01 from "../assets/Menu/Moho Set - 01.png";
import mohoSet02 from "../assets/Menu/Moho Set - 02.png";
import bbqChickenPlatter from "../assets/Menu/BBQ Chicken Platter.png";
import jamaicanChickenPlatter from "../assets/Menu/Jamaican Chicken Platter.png";
import mongolianBeefPlatter from "../assets/Menu/Mongolian Beef Platter.png";
import mohoSpecialPlatter from "../assets/Menu/Moho Special Platter.png";
import prawnTempura from "../assets/Menu/Prawn Tempura (6pcs).png";
import streetFriedCalamari from "../assets/Menu/Street Fried Calamari (13).png";
import shrimpRoll from "../assets/Menu/Shrimp Roll with chili oil (6pcs).png";
import hongKongFriedChicken from "../assets/Menu/Hong Kong Fried Chicken (6pcs).png";
import chickenBasilCurry from "../assets/Menu/Chicken Basil Curry.png";
import chickenNanban from "../assets/Menu/Chicken Nanban (6pcs).png";

// Main Course
import chineseMixedVegetables from "../assets/Menu/Chinese Mixed Vegetables (13).png";
import chickenVegetables from "../assets/Menu/Chicken Vegetables (13).png";
import schezwanChicken from "../assets/Menu/Schezwan Chicken (13).png";
import prawnMasala from "../assets/Menu/Prawn Masala (13).png";
import chickenMongolianCurry from "../assets/Menu/Chicken Mongolian Curry (13).png";
import chickenChilliOnion from "../assets/Menu/Chicken Chilli Onion (13).png";
import eggFriedRice from "../assets/Menu/Egg Fried Rice (13).png";
import mohoSpecialFriedRice from "../assets/Menu/Moho Special Fried Rice (13).png";

// Salad
import chickenCashewNutSalad from "../assets/Menu/Chicken Cashew Nut Salad.png";
import grilledChickenSalad from "../assets/Menu/Grilled Chicken Salad.png";

// Kebab & Tandoori
import chickenBotiKebab from "../assets/Menu/Chicken Boti Kebab.png";
import reshmiKebab from "../assets/Menu/Reshmi Kebab.png";
import hariyaliKebab from "../assets/Menu/Hariyali Kebab.png";
import chickenTandoori from "../assets/Menu/Chicken Tandoori.png";
import smokeyBBQFish from "../assets/Menu/Smokey BBQ Fish.png";
import tangdiKebab from "../assets/Menu/Tangdi Kebab with Makhanwala Gravy (6 pcs).png";
import mohoSpecialPlatter4in1 from "../assets/Menu/Moho Special Platter (4-in-1 Combo).png";

// Mocktails
import virginMojito from "../assets/Menu/Virgin Mojito.png";
import blueMoon from "../assets/Menu/Blue Moon.png";
import tangyOrange from "../assets/Menu/Tangy Orange.png";
import strawberryBlast from "../assets/Menu/Strawberry Blast.png";

// Cold Coffee & Shakes
import blackCoffee from "../assets/Menu/Black Coffee.png";
import regularCoffee from "../assets/Menu/Regular Coffee.png";
import chocoColdCoffee from "../assets/Menu/Choco Cold Coffee.png";
import kitKatCrasher from "../assets/Menu/KitKat Crasher.png";
import oreoCrasher from "../assets/Menu/Oreo Crasher.png";
import vanillaMilkshake from "../assets/Menu/Vanilla Milkshake.png";

// Signature Desserts
import brownieBliss from "../assets/Menu/Brownie Bliss with Vanilla Ice Cream.png";
import moltenLavaCake from "../assets/Menu/Molten Chocolate Lava Cake.png";
import classicCreamyPudding from "../assets/Menu/Classic Creamy Pudding.png";

const defaultMenuItems = [
    { id: 1, category: "Starters", title: "French Fries", description: "", price: "৳ 150", image: frenchFries },
    { id: 2, category: "Starters", title: "Chicken Fry (1 pcs)", description: "", price: "৳ 90", image: chickenFry },
    { id: 3, category: "Starters", title: "BBQ Wings (6 pcs)", description: "", price: "৳ 199", image: bbqWings },
    { id: 4, category: "Starters", title: "Crispy Wings (6 pcs)", description: "", price: "৳ 199", image: crispyWings },
    { id: 5, category: "Starters", title: "Chicken Lolipop (6 pcs)", description: "", price: "৳ 199", image: chickenLolipop },
    { id: 6, category: "Starters", title: "Fride Wonton (6 pcs)", description: "", price: "৳ 149", image: friedWonton },
    { id: 7, category: "Starters", title: "Cheezy Nachos", description: "", price: "৳ 199", image: cheezyNachos },
    { id: 8, category: "Starters", title: "Thai Fried Chicken (4 pcs)", description: "", price: "৳ 350", image: thaiFriedChicken },
    { id: 9, category: "Soup", title: "Thai Thick Soup (1:1 / 1:3)", description: "", price: "৳ 120 / 350", image: thaiThickSoup },
    { id: 10, category: "Soup", title: "Cream of Mushroom Soup (1:1 / 1:3)", description: "", price: "৳ 160 / 450", image: creamMushroomSoup },
    { id: 11, category: "Burger", title: "Chicken Burger", description: "", price: "৳ 120", image: chickenBurger },
    { id: 12, category: "Burger", title: "Chicken Cheese Burger", description: "", price: "৳ 150", image: chickenCheeseBurger },
    { id: 13, category: "Burger", title: "BBQ Burger", description: "", price: "৳ 160", image: bbqBurger },
    { id: 14, category: "Burger", title: "Moho Special Burger (with Fries & Coke)", description: "", price: "৳ 250", image: mohoSpecialBurger },
    { id: 15, category: "Burger", title: "Chicken Sandwich (with Fries & Coke)", description: "", price: "৳ 199", image: chickenSandwich },
    { id: 16, category: "Momos", title: "Chicken Momo (6 pcs)", description: "", price: "৳ 150", image: chickenMomo },
    { id: 17, category: "Momos", title: "Cheese Momo (6 pcs)", description: "", price: "৳ 200", image: cheeseMomo },
    { id: 18, category: "Momos", title: "Chili Oil Momo (6 pcs)", description: "", price: "৳ 239", image: chiliOilMomo },
    { id: 19, category: "Meatbox", title: "Chicken Meatbox", description: "", price: "৳ 150", image: chickenMeatbox },
    { id: 20, category: "Meatbox", title: "Smoky Sausage Meatbox", description: "", price: "৳ 180", image: smokySausageMeatbox },
    { id: 21, category: "Meatbox", title: "Moho Special BBQ Meatbox", description: "", price: "৳ 220", image: mohoSpecialBBQMeatbox },
    { id: 22, category: "Pasta", title: "Pasta Basta", description: "", price: "৳ 150", image: pastaBasta },
    { id: 23, category: "Pasta", title: "Creamy Alfredo Pasta", description: "", price: "৳ 200", image: creamyAlfredoPasta },
    { id: 24, category: "Pasta", title: "Moho Special Pasta", description: "", price: "৳ 250", image: mohoSpecialPasta },
    { id: 25, category: "Ramen", title: "Spicy Korean Ramen", description: "", price: "৳ 250", image: spicyKoreanRamen },
    { id: 26, category: "Ramen", title: "Heroshi Ramen", description: "", price: "৳ 300", image: heroshiRamen },
    { id: 27, category: "Ramen", title: "Moho Special Ramen", description: "", price: "৳ 350", image: mohoSpecialRamen },
    { id: 28, category: "Chowmein", title: "Regular Chowmein (1:1 / 1:3)", description: "", price: "৳ 120 / 299", image: regularChowmein },
    { id: 29, category: "Chowmein", title: "Spicy Chicken Chowmein (1:1 / 1:3)", description: "", price: "৳ 150 / 399", image: spicyChickenChowmein },
    { id: 30, category: "Chowmein", title: "Prawn Chowmein", description: "", price: "৳ 199", image: prawnChowmein },
    { id: 31, category: "Chowmein", title: "Moho Special Chowmein", description: "", price: "৳ 199", image: mohoSpecialChowmein },
    { id: 32, category: "Rice Bowls", title: "Crispy Chicken Rice Bowl", description: "", price: "৳ 130", image: crispyChickenRiceBowl },
    { id: 33, category: "Rice Bowls", title: "BBQ Chicken Rice Bowl", description: "", price: "৳ 150", image: bbqChickenRiceBowl },
    { id: 34, category: "Rice Bowls", title: "Moho Special Rice Bowl", description: "", price: "৳ 199", image: mohoSpecialRiceBowl },
    { id: 35, category: "Set Menus", title: "Moho Set - 01", description: "Egg fried rice, thai fride chicken (2pcs), Chinese vegetable, and mix salad.", price: "৳ 159", image: mohoSet01 },
    { id: 36, category: "Set Menus", title: "Moho Set - 02", description: "Egg fried rice, premium chicken katsu, Chinese vegetable, and mix salad.", price: "৳ 180", image: mohoSet02 },
    { id: 37, category: "Set Menus", title: "BBQ Chicken Platter", description: "Egg fried rice, guitar bbq chicken, Chinese vegetable and raita.", price: "৳ 199", image: bbqChickenPlatter },
    { id: 38, category: "Set Menus", title: "Jamaican Chicken Platter", description: "Egg fried rice, Jamaican chicken, Chinese vegetable, and raita.", price: "৳ 250", image: jamaicanChickenPlatter },
    { id: 39, category: "Set Menus", title: "Mongolian Beef Platter", description: "Egg fried rice, Mongolian beef, Chinese vegetable, and raita.", price: "৳ 349", image: mongolianBeefPlatter },
    { id: 40, category: "Set Menus", title: "Moho Special Platter", description: "Mix fried rice, peri peri chicken, BBQ wings (2pcs), Chinese vegetable, raita. PAN-ASIAN", price: "৳ 299", image: mohoSpecialPlatter },
    { id: 41, category: "Set Menus", title: "Prawn Tempura (6pcs)", description: "", price: "৳ 250", image: prawnTempura },
    { id: 42, category: "Set Menus", title: "Street Fried Calamari (1:3)", description: "", price: "৳ 299", image: streetFriedCalamari },
    { id: 43, category: "Set Menus", title: "Shrimp Roll with chili oil (6pcs)", description: "", price: "৳ 320", image: shrimpRoll },
    { id: 44, category: "Set Menus", title: "Hong Kong Fried Chicken (6pcs)", description: "", price: "৳ 320", image: hongKongFriedChicken },
    { id: 45, category: "Set Menus", title: "Chicken Basil Curry (1:3)", description: "", price: "৳ 349", image: chickenBasilCurry },
    { id: 46, category: "Set Menus", title: "Chicken Nanban (6pcs)", description: "", price: "৳ 210", image: chickenNanban },
    { id: 47, category: "Main Course", title: "Chinese Mixed Vegetables (1:3)", description: "", price: "৳ 180", image: chineseMixedVegetables },
    { id: 48, category: "Main Course", title: "Chicken Vegetables (1:3)", description: "", price: "৳ 220", image: chickenVegetables },
    { id: 49, category: "Main Course", title: "Schezwan Chicken (1:3)", description: "", price: "৳ 280", image: schezwanChicken },
    { id: 50, category: "Main Course", title: "Prawn Masala (1:3)", description: "", price: "৳ 320", image: prawnMasala },
    { id: 51, category: "Main Course", title: "Chicken Mongolian Curry (1:3)", description: "", price: "৳ 280", image: chickenMongolianCurry },
    { id: 52, category: "Main Course", title: "Chicken Chilli Onion (1:3)", description: "", price: "৳ 280", image: chickenChilliOnion },
    { id: 53, category: "Main Course", title: "Egg Fried Rice (1:3)", description: "", price: "৳ 249", image: eggFriedRice },
    { id: 54, category: "Main Course", title: "Moho Special Fried Rice (1:3)", description: "", price: "৳ 349", image: mohoSpecialFriedRice },
    { id: 55, category: "Salad", title: "Chicken Cashew Nut Salad", description: "", price: "৳ 349", image: chickenCashewNutSalad },
    { id: 56, category: "Salad", title: "Grilled Chicken Salad", description: "", price: "৳ 299", image: grilledChickenSalad },
    { id: 57, category: "Kebab & Tandoori", title: "Chicken Boti Kebab", description: "", price: "৳ 180", image: chickenBotiKebab },
    { id: 58, category: "Kebab & Tandoori", title: "Reshmi Kebab", description: "", price: "৳ 180", image: reshmiKebab },
    { id: 59, category: "Kebab & Tandoori", title: "Hariyali Kebab", description: "", price: "৳ 180", image: hariyaliKebab },
    { id: 60, category: "Kebab & Tandoori", title: "Chicken Tandoori", description: "", price: "৳ 199", image: chickenTandoori },
    { id: 61, category: "Kebab & Tandoori", title: "Smokey BBQ Fish", description: "", price: "৳ 299", image: smokeyBBQFish },
    { id: 62, category: "Kebab & Tandoori", title: "Tangdi Kebab with Makhanwala Gravy (6 pcs)", description: "", price: "৳ 420", image: tangdiKebab },
    { id: 63, category: "Kebab & Tandoori", title: "Moho Special Platter (4-in-1 Combo)", description: "", price: "৳ 699", image: mohoSpecialPlatter4in1 },
    { id: 64, category: "Mocktails", title: "Virgin Mojito", description: "", price: "৳ 149", image: virginMojito },
    { id: 65, category: "Mocktails", title: "Blue Moon", description: "", price: "৳ 179", image: blueMoon },
    { id: 66, category: "Mocktails", title: "Tangy Orange", description: "", price: "৳ 179", image: tangyOrange },
    { id: 67, category: "Mocktails", title: "Strawberry Blast", description: "", price: "৳ 179", image: strawberryBlast },
    { id: 68, category: "Cold Coffee & Shakes", title: "Black Coffee", description: "", price: "৳ 40", image: blackCoffee },
    { id: 69, category: "Cold Coffee & Shakes", title: "Regular Coffee", description: "", price: "৳ 90", image: regularCoffee },
    { id: 70, category: "Cold Coffee & Shakes", title: "Choco Cold Coffee", description: "", price: "৳ 120", image: chocoColdCoffee },
    { id: 71, category: "Cold Coffee & Shakes", title: "KitKat Crasher", description: "", price: "৳ 179", image: kitKatCrasher },
    { id: 72, category: "Cold Coffee & Shakes", title: "Oreo Crasher", description: "", price: "৳ 179", image: oreoCrasher },
    { id: 73, category: "Cold Coffee & Shakes", title: "Vanilla Milkshake", description: "", price: "৳ 149", image: vanillaMilkshake },
    { id: 74, category: "Signature Desserts", title: "Brownie Bliss with Vanilla Ice Cream", description: "Warm Chocolate Brownie • Vanilla Ice Cream • Chocolate Drizzle", price: "৳ 249", image: brownieBliss },
    { id: 75, category: "Signature Desserts", title: "Molten Chocolate Lava Cake", description: "Rich Chocolate Cake • Gooey Chocolate Center • Chocolate Sauce", price: "৳ 199", image: moltenLavaCake },
    { id: 76, category: "Signature Desserts", title: "Classic Creamy Pudding", description: "Silky Smooth Pudding • Caramel Glaze • Delicate Sweetness", price: "৳ 120", image: classicCreamyPudding },
];

export const defaultCategories = ["All","Starters","Soup","Burger","Momos","Meatbox","Pasta","Ramen","Chowmein","Rice Bowls","Set Menus","Main Course","Salad","Kebab & Tandoori","Mocktails","Cold Coffee & Shakes","Signature Desserts"];

const MenuContext = createContext(null);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(() => {
    try {
      const saved = localStorage.getItem("moho_menu");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) return parsed;
      }
      return defaultMenuItems;
    } catch {
      return defaultMenuItems;
    }
  });

  const [categories, setCategories] = useState(() => {
    try {
      const saved = localStorage.getItem("moho_categories");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) return parsed;
      }
      return defaultCategories;
    } catch {
      return defaultCategories;
    }
  });

  useEffect(() => {
    localStorage.setItem("moho_categories", JSON.stringify(categories));
  }, [categories]);

  const addCategory = (categoryName) => {
    if (!categories.includes(categoryName)) {
      setCategories((prev) => [...prev, categoryName]);
    }
  };

  const addMenuItem = (item) => {
    const newItem = {
      ...item,
      id: Math.max(0, ...menuItems.map((m) => m.id)) + 1,
    };
    setMenuItems((prev) => [...prev, newItem]);
    return newItem;
  };

  const updateMenuItem = (id, updatedItem) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  const deleteMenuItem = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        categories,
        addCategory,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
