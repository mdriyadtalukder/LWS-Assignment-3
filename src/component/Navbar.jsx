import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Products from './Products';
import Cart from './Cart';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [card, setCard] = useState(false);
    const [product, setProduct] = useState(true);
    const carts=useSelector((state)=>state.carts.carts);
    console.log(carts)
    var n=0;
    for(var i=0;i<carts.length;i++){
        n=n+carts[i].quantity;
    }

    const cart = (event) => {
        event.preventDefault();
        setProduct(false);
        setCard(true);
    }
    const products = (event) => {
        event.preventDefault();
        setCard(false);
        setProduct(true);
    }
    return (
        <div>
            <nav class="bg-[#171C2A] py-4">
                <div class="navBar">
                    <a onClick={products} href="#home">
                        <img src={logo} alt="LWS" class="max-w-[140px]" />
                    </a>
                    <div class="flex gap-4">
                        <a onClick={products} href="#home" class="navHome" id="lws-home"> Home </a>
                        <a onClick={cart} href="#cart" class="navCart" id="lws-cart">
                            <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">{n}</span>
                        </a>
                    </div>
                </div>
            </nav>
            <main class="py-16" style={{ display: product ? 'block' : 'none' }}>
                <Products></Products>
            </main>
            <main class="py-16" style={{ display: card ? 'block' : 'none' }}>
                <Cart></Cart>
            </main>
        </div>
    );
};

export default Navbar;