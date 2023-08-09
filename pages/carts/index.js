import { useGlobalContext } from '@/context/provider';
import classes from './carts.module.css';
import { Fragment, useContext, useEffect, useState } from 'react';
import CartList from '@/components/cart/cart-list';
import { useRouter } from 'next/router';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const { cart } = useGlobalContext();

  const handleSubTotal = (subTtl, id, qty) =>{
    
    let data = cart;
    const chk = data.find((val) => val.id===id);
    if(chk){
      chk.subTotal=subTtl
      chk.qty=qty
    }
    console.log(data)
    sumTotal(data)
  }

  const sumTotal = (item) => {
    let total = [];
    item.forEach((item) => {
      total.push(Number(item.subTotal))
    });

    const subTotal = total.reduce((sum, n) => {
      return sum + n
    })

    setTotalPrice(subTotal)
  }


  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.cartList}>
          {cart.map((val) => <CartList key={val.id} {...val} onTotal={handleSubTotal} />) }
        </div>
        <div className={classes.cartPrice}>
          <div className={classes.wrapPrice}>
            <div>
              <p><strong>Sub Total</strong></p>
            </div>
            <div>
              <p>$ {totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <div className={classes.warpForm}>
            <div className={classes.inputGroup}>
              <input type="text" placeholder="Apply Voucher" />
              <div className={classes.inputGroupAppend}>
                <button type="button">Apply</button>
              </div>
            </div>
          </div>
          <button className={classes.btnCheckout}>Checkout</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;