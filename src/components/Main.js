import React from 'react';
import Product from './Product';

export default function Main(props) {

    const {products, cartAdd} = props;

    return (
        <main>
            {products.map((product) => (
                <Product key={product.id} product={product} cartAdd={cartAdd}></Product>
            ))}
        </main>
    );
}