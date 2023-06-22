import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { added } from '../redux/products/action';

const ProductForm = () => {
    const productName = useRef('');
    const productCategory = useRef('');
    const productImg = useRef('');
    const productPrice = useRef('');
    const productQuantity = useRef('');
    const dispatch = useDispatch();
    const addProduct = (event) => {
        event.preventDefault();
        dispatch(added(productName.current.value, productCategory.current.value, productImg.current.value, Number(productPrice.current.value), Number(productQuantity.current.value)));
    }
    return (
        <div>
            <div class="formContainer">
                <h4 class="formTitle">Add New Product</h4>
                <form onSubmit={addProduct} class="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                    <div class="space-y-2">
                        <label for="lws-inputName">Product Name</label>
                        <input ref={productName} class="addProductInput" id="lws-inputName" type="text" required />
                    </div>
                    <div class="space-y-2">
                        <label for="lws-inputCategory">Category</label>
                        <input ref={productCategory} class="addProductInput" id="lws-inputCategory" type="text" required />
                    </div>
                    <div class="space-y-2">
                        <label for="lws-inputImage">Image Url</label>
                        <input ref={productImg} class="addProductInput" id="lws-inputImage" type="text" required />
                    </div>
                    <div class="grid grid-cols-2 gap-8 pb-4">
                        <div class="space-y-2">
                            <label for="ws-inputPrice">Price</label>
                            <input ref={productPrice} class="addProductInput" type="number" id="lws-inputPrice" required />
                        </div>
                        <div class="space-y-2">
                            <label for="lws-inputQuantity">Quantity</label>
                            <input ref={productQuantity} class="addProductInput" type="number" id="lws-inputQuantity" required />
                        </div>
                    </div>
                    <button type="submit" id="lws-inputSubmit" class="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;