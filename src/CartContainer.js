import React from 'react';
import { useGlobalContext } from './Context';
import CartItem from './CartItem';



const CartContainer = () => {

    const {cart} = useGlobalContext();
    if(cart.length === 0 ){
        return (
            <section>
                <header>
                    <h2>Your WishList</h2>
                    <h4 className='empty-cart'>Is Currently Empty</h4>
                </header>
            </section>
        )
    }


  return (
    <section className='cart'>
        <header>
            <h2>Your WishList</h2>
            
            {/* CART ITEM */}

            <div>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item}/>
                })}
            </div>

            {/* CAR footer  */}

            <footer>
                <hr/>
                <div className='cart-total'>
                    <h4>Total: <span>0.00 pln</span></h4>
                </div>
                <button className='btn clear-btn' onClick={() => console.log("clear")}>CLear Cart</button>
            </footer>
        </header>
    </section>
  )
}

export default CartContainer