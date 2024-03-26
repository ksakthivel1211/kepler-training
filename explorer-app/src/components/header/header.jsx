import Button from "../button/button";
import logo from "../../assets/logo.png";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ()=>{

    const navButtonValues = ["Hotels","Bike Rentals","Restaurants"];

    const navSection = navButtonValues.map((val,index)=>(

        <Button key={index} buttonType={'secondary'}>{val}</Button>
    ))

    return (
        <header className={`${classes['header-wrapper']} roboto-black`}>
            <div className={classes['img-holder']}>
                <Link to={'/'}>
                    <img src={logo} alt="page logo" />
                </Link>
            </div>
            <section className={classes['nav-button-holder']}>
                {navSection}
            </section>
        </header>
        );

}

export default Header;