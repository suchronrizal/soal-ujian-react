import ProductItem from './product-item';
import classes from './product-list.module.css'
function ProductList(props) {
  const {data} = props
  return ( 
    <div className={classes.container}>
      {data.map((val, i) => <ProductItem key={val.id} {...val}  />)}
    </div>
  );
}

export default ProductList;