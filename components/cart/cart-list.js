import { Fragment, useEffect, useState } from "react"
import classes from './cart-list.module.css'
import { Link } from "react-feather";
import ButtonCart from "../ui/button-cart";

const CartList = (props) => {
  const {title, category, price, image, qty, id, onTotal} = props;
  const [count, setCount] = useState(qty);

  const handleCart = (e) => {
    if(e==='+'){
      setCount((state) => state + 1)
    }else{
      setCount((state => (state -1 === 0 ? 1 : state - 1 )))
    }
  }

  const handleSubTotal = () =>{
    let ttl = price*count;
    onTotal(ttl, id, count)
  }

  useEffect(()=>{
    handleSubTotal()
  },[count])

  const exploreLink = `/products/${id}`;

  return (
    <Fragment>
        <div className={classes.wrapCart}>
          <div className={classes.cartImg}><img src={image} alt="" /></div>
          <div className={classes.nameCart}>
            <ButtonCart link={exploreLink} style={{display:"flex", alignItems:"center"}}><h5>{title}</h5></ButtonCart>
            <p>{category}</p>
          </div>
          <div className={classes.cartTotal}>$ {price}</div>
          <div className={classes.cartQty}>
            <div className={classes.addCart}>
              <button onClick={() => handleCart('-')}>-</button>
              <span>{count}</span>
              <button onClick={() => handleCart('+')}>+</button>
            </div>
          </div>
          <div>$ {price * Number(count).toFixed(2)}</div>
        </div>
    </Fragment>
  )
}

export default CartList