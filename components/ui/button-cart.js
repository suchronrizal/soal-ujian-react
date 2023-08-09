import Link from "next/link"
import classes from './button-cart.module.css'

const ButtonCart = (props) => {
  return(
    <Link href={props.link}>
      <div className={classes.btn}>{props.children}</div>
    </Link>
  )
}

export default ButtonCart