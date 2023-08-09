import classes from './main-header.module.css';
import ButtonCart from '../ui/button-cart';
import { ShoppingCart } from 'react-feather';
import { useGlobalContext } from '@/context/provider';
import Link from 'next/link';

const MainHeader = () => {
  const { cart } = useGlobalContext();
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <ButtonCart link={'/'}><h2>Logo</h2></ButtonCart>
      </div>
      <div className={classes.menu}>
        <Link href={`/products`}>Product</Link>
        <ButtonCart link={'/carts'}>
          <ShoppingCart />
          <div className={classes.badge}>{cart.length}</div>
        </ButtonCart>
      </div>
    </nav>
  )
}

export default MainHeader