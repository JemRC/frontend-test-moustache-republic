import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
import { useState } from 'react';

function App() {

  const {products} = data; // extract products from product.js
  const [cartItems, setCartItems] = useState([]); // By default, the items in the cart is empty
  
  // Function For adding to cart
  const cartAdd = (product) => {
    const exist = cartItems.find(i => i.id === product.id);
    // should the product exist,
    if (exist) {
      setCartItems(cartItems.map(i => i.id === product.id ? {...exist, qty: exist.qty+1} : i));
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }

  // Function For removing to cart
  const cartRemove = (product) => {
    const exist = cartItems.find((i) => i.id === product.id);
    // should the product's quantity be one, remove from cart
    if (exist.qty === 1) {
      // If the product does not equal to the cart items, then it returns.
      // Otherwise, it will be removed.
      setCartItems(cartItems.filter((i) => i.id !== product.id));
    } else {
      setCartItems(cartItems.map(i => i.id === product.id ? {...exist, qty: exist.qty-1} : i))
    }
  }

  return (
    <div className="App">
      <Header itemCartCount={cartItems.length}></Header>
      <div>
        <Main cartAdd={cartAdd} products={products}></Main>
        <Cart cartRemove={cartRemove} cartAdd={cartAdd} cartItems={cartItems}></Cart>
      </div>
    </div>
  );
}

export default App;
