import { Fragment, useState } from "react";
import classes from './product-detail.module.css'
import { useGlobalContext } from "@/context/provider";
import Swal from "sweetalert2";

function ProductDetails({title, image, category, price, description, id}) {
  const [count, setCount] = useState(1)
  
  const  handleCart = (e) => {
    if(e === '+') return setCount((state) => state + 1 )
    
    return setCount((state => (state - 1 === 0 ? 1 : state - 1 )))
  }

  const { setDataCart, cart } = useGlobalContext();
  const handleAddToCart = () => {
    let tmp=[...cart]
    const data = {
      title:title,
      desc:description,
      id:id,
      image:image,
      category:category,
      price:price,
      qty:count,
      subTotal:price*count
    }

    if(cart.length === 0){ 
      tmp.push(data)
      Swal.fire({   
        icon: 'success',
        title: 'Your product has been saved',
        showConfirmButton: false,
        timer: 2000 
      })
    } else if (cart.length){
      tmp.forEach((items)=>{
        if(items.id===id){
          items.qty=items.qty+count;
          Swal.fire({   
            icon: 'info',
            title: 'Product already exist',
            showConfirmButton: false,
            timer: 1500 
          })
        }else if(!tmp.find((item)=>item.id===id)){
          tmp.push(data)
          Swal.fire({   
            icon: 'success',
            title: 'Your product has been saved',
            showConfirmButton: false,
            timer: 2000 
          })
        }
      })

    }

    setDataCart(tmp)
  };

  return ( 
    <Fragment>
      <div className={classes.container}> 
        <div className={classes.wrap}>
          <div className={classes.productImg}><img src={image} alt="detail product"/></div>
          <div className={classes.productBody}>
            <div className={classes.wrap}>
              <div className={classes.title}>
                <h4>{title}</h4>
                <p>{category}</p>
              </div>
              <div>
                <div className={classes.addCart}>
                  <button onClick={() => handleCart('-')}>-</button>
                  <span>{count}</span>
                  <button onClick={() => handleCart('+')}>+</button>
                </div>
              </div>
            </div>
            <div className={classes.desc}>
              <h4>Desription</h4>
              <p>{description}</p>
            </div>
            <div className={classes.priceSection}>
              <div className={classes.price}>$ {price}</div>
              <button className={classes.btnAddCart} onClick={()=>handleAddToCart()}>Add To Cart</button>
            </div>
          </div>
        </div>  
      </div>
    </Fragment> 
  );
}

export default ProductDetails;