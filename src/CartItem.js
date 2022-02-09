import React from 'react';
import { useGlobalContext } from './Context';



  const CartItem = ({id, img, title, price, amount}) => {

  const {remove, increase, decrease, toggleAmount} = useGlobalContext();


  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
              <h4>{title}</h4>
              <h4 className='item-price'>pln {price}</h4>
              <button className='remove-btn' onClick={()=> remove(id)}>
                Delete
              </button>
        </div>

        <div style={{display:"flex"}}>

            {/* decrease amout  */}

            <button className='amount-btn' onClick={()=> toggleAmount(id, "dec")}>
            <p style={{fontSize:"20px"}}>-</p>
            </button>

              {/* increase amout  */}

            <button className='amount-btn' onClick={() => toggleAmount(id, "inc")}>
            <p style={{ fontSize: "20px" }}>+</p>
            </button>
        </div>
    </article>
  )
}

export default CartItem