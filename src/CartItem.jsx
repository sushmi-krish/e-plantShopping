import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';


const CartItem = ({ onContinueShopping }) => {

  const cart = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
     return cart.map(item=>parseFloat(item.cost.replace('$',''))*item.quantity)
                .reduce((total,cost)=>total+cost,0);
    };

  const handleContinueShopping = (e) => {
    if(onContinueShopping){
        onContinueShopping(e)//call parent function
    }
   
  };


//calculate the increament by identify the global variable in the payload action(name) and increase the quantity by adding 1
  const handleIncrement = (item) => {
    dispatch(updateQuantity({name:item.name,quantity:item.quantity+1}))
  };
//calculate the decrement by identify the global variable in the payload action (name) and decrease the quantity by 1 
  const handleDecrement = (item) => {
   dispatch(updateQuantity({name:item.name,quantity:item.quantity-1}))
  };
//remove the item by payload action calls the cartReducer from store perform the function
  const handleRemove = (item) => {
   dispatch(removeItem(item.name))
  }
  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
   const amt = item.cost.replace('$','')
  const cost = amt*item.quantity
 return cost;
  };
  //handle the checkout function 
  const handleCheckoutShopping = (e) => {
   if(cart.length === 0){
    alert(`Your cart is empty!please continue shopping before checkout`)
   
   }
   else{
     const pay =cart.map(item=>parseFloat(item.cost.replace('$',''))*item.quantity)
     .reduce((total,cost)=>total+cost,0);
     alert(`please confirm the Total Amount $ ${pay}!Thank you for shopping `)
   }
   onContinueShopping(e)
}

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e)=> handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;