import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({pd, handleRemoveProduct, children}) => {
    const {name, img, price, shipping, quantity} = pd;
    return (
        <div className='review-item'>
           <div>
               <img src={img} alt="" />
           </div>
           <div className="review-item-details-container">
               <div className="review-item-details">
                 <p className="product-name" title={name}>
                     {name.length > 20 ? name.slice(0,20) + '...' : name}</p> 
                 <p>Price : $<span className='orange-color'>{price}</span></p> 
                 <p><small> Shipping :${shipping}</small></p> 
                 <p><small>Quantity :{quantity}</small></p>
                 {children}
               </div>
               <div className="delete-container">
                   <button onClick={() => handleRemoveProduct(pd) } className='delete-button'>
                       <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                   </button>
               </div>
           </div>
        </div>
    );
};

export default ReviewItem;