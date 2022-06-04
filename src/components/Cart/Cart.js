import React from 'react';
import './Cart.css'

const Cart = ({cart, children}) => {
    //  console.log(cart);
  
    let total = 0;
    let shippingPrice = 0;
    let selectItem = 0;
    for(const product of cart){
        selectItem = selectItem + product.quantity;
        total = total + product.price;
        shippingPrice += product.shipping;
    };
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shippingPrice + tax;
    return (
        <div className='cart'>
             <h2>Order Summary</h2>
              <p>Selected Item : {selectItem}</p>
              <p>Total Price : ${total}</p>
              <p>Shipping Price : ${shippingPrice}</p>
              <p>Tax : ${tax}</p>             
              <p>Grand Total : {grandTotal}</p>
              <p>{children}</p>
        </div>
    );
};

export default Cart;