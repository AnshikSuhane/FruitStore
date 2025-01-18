import  { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const CART_API_URL = "https://fruitsstore-84f76-default-rtdb.firebaseio.com/CartPage.json";


const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(CART_API_URL);
        const fetchedItems = response.data || {}; 
        const itemsArray = Object.keys(fetchedItems).map(key => ({
          id: fetchedItems[key].id,
          name: fetchedItems[key].name,
          price: fetchedItems[key].price,
          quantity: fetchedItems[key].quantity,
          image: fetchedItems[key].image,
        }));
        setItems(itemsArray);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);
  const updateCartInDatabase = async (updatedItems) => {
    try {
      await axios.put(CART_API_URL, updatedItems);
    } catch (error) {
      console.error('Error updating cart in database:', error);
    }
  };
  const addToCart = (item) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id);
      if (existingItem) {
        return currentItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      const updatedItems = [...currentItems, { ...item, quantity: 1 }];
      updateCartInDatabase(updatedItems);
      return updatedItems;
    });
  };
  const removeFromCart = (id) => {
    setItems(currentItems => {
      const updatedItems = currentItems.filter(item => item.id !== id);
      updateCartInDatabase(updatedItems);
      return updatedItems;
    });
  };
  const updateQuantity = (id, quantity) => {
    setItems(currentItems => {
      const updatedItems = currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      updateCartInDatabase(updatedItems);
      return updatedItems;
    });
  };
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
