import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  //addItem agrega item al carrito
  const addItem = (props, quantity) => {
    if (isInCart(props.id)) {
      const updateQty = [...cart]; //crea una copia de carrito para hacer un mapeo y sumarle la cantidad al producto en caso de ya estar agregado

      updateQty.map((element) => {
        if (element.props.id === props.id) {
          element.quantity += quantity;
        }
      });
      setCart(updateQty); // actualiza el carrito con la cantidad
    } else {
      setCart([...cart, { props, quantity }]); // si el producto no esta en el carrito lo agrega
    }
    alert ("Productos Agregados")
  };

  //isInCart chequea si el producto esta o no en el carrito
  const isInCart = (id) => cart.find((element) => element.props.id === id);

  //clear elimina todos los productos del carrito
  const clear = () => {
    setCart([]);
  };

  //removeItem elimina el item seleccionado segun su id
  const removeItem = (id) => {
    const cartFilter = () => cart.filter((element) => element.props.id !== id);
    setCart(cartFilter);
  };


  //cartProducts suma la cantidad total de productos que hay en el carrito

 const cartProducts = cart.reduce((acc,product) => acc += product.quantity,0)
 
  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem, cartProducts }}>
      {children}
    </CartContext.Provider>
  );
}
