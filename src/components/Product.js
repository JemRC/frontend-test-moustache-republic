import React from 'react'

export default function Product(props) {

    const {product, cartAdd} = props;

  return (
    <div class="product-wrapper">
        <div class="image-col">
            <img class="product-img" src={product.imageURL} alt={product.name}></img>
        </div>
        <div class="description-col">
            <h1>{product.title}</h1>
            <div class="price"><p>${product.price}</p></div>
            <p>{product.description}</p>
            <p><strong>SIZE</strong><span>*</span></p>
            <div class="size-wrapper">
                <button>S</button>
                <button>M</button>
                <button>L</button>
            </div>
            <button onClick={() =>cartAdd(product)} class="addtoCart">ADD TO CART</button>
        </div>
    </div>
  )
}
