import React,{Fragment} from 'react'
import MainNav from './MainNav'
import classes from './Layout.module.css'
const Layout = (props) => {
    return (
        <Fragment>
            <MainNav/>
            <main className={classes.main}>{props.children}
            </main>
        </Fragment>
    )
}

export default Layout
