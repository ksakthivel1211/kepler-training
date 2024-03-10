import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import styles from './header.module.scss';

const Header = ()=>
{
    const tabList = ['COUCHES','CHAIRS','DINING'];
    const [selectedTab,setSelectedTab] = useState();

    function onButtonClick(buttonValue)
    {
        setSelectedTab(buttonValue)
    }

    const navButtonSection = tabList.map((val,index)=>(
        <Link to={`/shopping/${val.toLowerCase()}`}>
            <Button type='secondary-btn' 
                isSelected={val === selectedTab} 
                onSelect = {()=>onButtonClick(val)}
                section='header'
                key={index}>{val}
            </Button>
        </Link>
    ));

    return(
        <header className={styles['header-wrapper']}>
            <div className={styles['logo-wrapper']}>
                SITBACK
            </div>
            <div className={styles['btn-wrapper']}>
                {navButtonSection}
            </div>
            <div>
                Profile
            </div>
        </header>
    )
}

export default Header;