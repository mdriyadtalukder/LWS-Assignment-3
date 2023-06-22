import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementtAdd, deleteCart, incrementAdd } from '../redux/cart/action';
import { decrement, increment } from '../redux/products/action';

const CartItem = ({ cart }) => {
  const { name, category, img, price, quantity, id } = cart;
  const products = useSelector((state) => state.products.products);
  const filtering = products.filter((p) => p.id === id);
  const dispatch = useDispatch();
  const incrmt = () => {
    dispatch(incrementAdd(id, 1));
    dispatch(increment(id));


  }

  const deccrmt = () => {
    dispatch(decrementtAdd(id, 1));
    dispatch(decrement(id, 1));


  }
  const delett = () => {
    dispatch(deleteCart(id));
    dispatch(decrement(id, quantity));





  }

  return (
    <div class="space-y-6">
      <div class="cartCard">
        <div class="flex items-center col-span-6 space-x-6">
          <img class="lws-cartImage" src={img} alt="product" />
          <div class="space-y-2">
            <h4 class="lws-cartName">{name}</h4>
            <p class="lws-cartCategory">{category}</p>
            <p>BDT <span class="lws-cartPrice">{price}</span></p>
          </div>
        </div>
        <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">

          <div class="flex items-center space-x-4">
            <button class="lws-incrementQuantity" onClick={incrmt} disabled={filtering[0].quantity === 0 && true}>
              <i class="text-lg fa-solid fa-plus"></i>
            </button>
            <span class="lws-cartQuantity">{quantity}</span>
            <button class="lws-decrementQuantity" onClick={deccrmt} disabled={quantity === 0 && true}>
              <i class="text-lg fa-solid fa-minus"></i>
            </button>
          </div>

          <p class="text-lg font-bold">BDT <span class="lws-calculatedPrice">{Number(quantity) * Number(price)}</span></p>
        </div>

        <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button class="lws-removeFromCart" onClick={delett}>
            <i class="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>


    </div>

  );
};

export default CartItem;