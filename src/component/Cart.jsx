import React from 'react';
import CartItem from './CartItem';
import CartPay from './CartPay';
import { useSelector } from 'react-redux';

const Cart = () => {
  const carts = useSelector((state) => state.carts.carts)
  return (
    <main class="py-16">
      <div class="container 2xl:px-8 px-2 mx-auto">
        <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div class="cartListContainer">
         <div>
         {
            carts.map((cart) => <CartItem cart={cart} key={cart.id}></CartItem>)
          }
         </div>
          <CartPay></CartPay>
        </div>
      </div>
    </main>
  );
};

export default Cart;