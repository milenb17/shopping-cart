import { useState } from 'react';
function Cart(props) {
    const { cart, handleRemoveCart } = props;
    let total = 0;
    Object.entries(cart).forEach(([key, value]) => {
        total += value.price * value.quantity;
    })
    return (
        <div>
            <h1>Cart</h1>
            <h3>Order Summary</h3>
            <div>
                {Object.entries(cart).map(([key, value]) => {
                    return (
                        <div>
                            <p key={key}>{value.name} ${value.price}.00 - {value.quantity}</p>
                            <button id={value.name} onClick={handleRemoveCart}>Remove</button>
                        </div>
                        
                    )
                })}
            </div>
            <div>
                <p> Order Total: ${total}.00</p>
            </div>
        </div>
        
    )
}

export default Cart;