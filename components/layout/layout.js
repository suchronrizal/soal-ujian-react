import { Fragment } from "react";;
import MainHeader from "./main-header";
import classes from './main-header.module.css'

const Layout = (props) => {
  const { children } = props;
  return(
    <Fragment>
      <MainHeader />
      <main className={classes.wrapper}>
        {children}
      </main>
    </Fragment>
  )   
}

export default Layout