import { Fragment, useEffect, useState } from 'react';
import ProductList from '@/components/product/product-list';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getData = async () =>{
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return(
    <Fragment>
      <ProductList data={products} />
    </Fragment>
  )
}

export default Products