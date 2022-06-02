import React from 'react';

export default function Header(props) {

    const {itemCartCount} = props;

    return (
        <header>
            <div class= "myCart">
                <a href='#cart'>

                    My Cart {''}
                    {itemCartCount ? (
                        <span class="cart-span">({itemCartCount})</span>
                    ):('')
                }
                    
                </a>{''}
            </div>
        </header>
    );
}