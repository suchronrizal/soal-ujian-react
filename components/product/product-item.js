
import Link from 'next/link';
import classes from './product-item.module.css';

function ProductItem({title, image, category, price, id }) {
    const exploreLink = `/products/${id}`;  
    return ( 
      <Link href={exploreLink}>
        <div className={classes.card}>
          <div className={classes.cardImg} style={{backgroundImage:`url(${image})`}}>&nbsp;</div>
          <div className={classes.cardBody}>
            <p>{category}</p>
            <div className={classes.cardTitle}>
              {title}
            </div>
            <div className={classes.cardPrice}>$ {price}</div>
          </div>
        </div>
      </Link>
    );
}

export default ProductItem;