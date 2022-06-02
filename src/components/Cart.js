import React from 'react';

export default function Cart(props) {

    const {cartItems, cartAdd, cartRemove} = props;

    return (
        <div>
            <p>Cart Items</p>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <div className="cartRow">
                        <button onClick={() =>cartAdd(item)}>+</button>
                        <button onClick={() =>cartRemove(item)}>-</button>
                    </div>
                    <div>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
        </div>
    );
}