import React, {createContext, useState} from 'react';
import {getProduct} from '../util/data';

export const CartContext = createContext('');

export function CartProvider(props: any) {
  const [items, setItems] = useState<any>([]);

  function addItemToCart(id: number) {
    const product = getProduct(id);
    setItems((prevItems: any[]) => {
      const item = prevItems.find(prevItem => prevItem.id === id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product?.price,
          },
        ];
      } else {
        return prevItems.map(prevItem => {
          if (prevItem.id === id) {
            item.qty++;
            item.totalPrice += product?.price;
          }
          return item;
        });
      }
    });
  }
  function getItemsCount() {
    return items.reduce((sum: any, item: any) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum: any, item: any) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}
