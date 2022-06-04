import React from 'react';
import {  useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const nevigate = useNavigate()

    const handleRemoveProduct = (product) =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)

    }
    return (
        <div className='shop-container'>
           <div className="review-container">
                {
                    cart.map(pd => <ReviewItem pd={pd}  key={pd.id} handleRemoveProduct={handleRemoveProduct} ></ReviewItem> )
                }
           </div>
           <div className="cart-container">
                <Cart cart={cart}>
                    
                        <button onClick={() => nevigate('/inventory') }>Inventory</button>
                    
                </Cart>
           </div>
        </div>
    );
};

export default Order;