import ProductDetails from "@/components/product-detail/product-detail";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const router = useRouter();
    
    const productId = router.query.productId;

    const getProductDetail = async() => {
      try {    
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data)
      } catch (err) {
        console.error(err)
      }
    }

    useEffect(() => {
      getProductDetail()
    },[productId]);


    return (
      <Fragment>
        <ProductDetails {...product}/>
      </Fragment>
    )
}

export default ProductDetail;