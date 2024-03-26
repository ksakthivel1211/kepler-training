import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../button/button";
import styles from './header.module.scss';
import { headerData } from "../../constants/string-constant";

const Header = ()=>
{
    const {categoryId} = useParams();
    const location = useLocation();
    const tabList = ['couches','chairs','dining'];
    const [selectedTab,setSelectedTab] = useState();

    function onButtonClick(buttonValue)
    {
        setSelectedTab(buttonValue);
    }

    useEffect(()=>{
        setSelectedTab(categoryId);
    },[location])

    const navButtonSection = tabList.map((val,index)=>(
        <Link key={index} to={`/shopping/${val}`}>
            <Button type='secondary-btn' 
                isSelected={val === selectedTab} 
                onSelect = {()=>onButtonClick(val)}
                section='header'
                key={index}>{val.toUpperCase()}
            </Button>
        </Link>
    ));

    return(
        <header className={styles['header-wrapper']}>
            <Link to={'/'}>
                <div className={styles['logo-wrapper']}>
                    {headerData.logo}
                </div>
            </Link>
            <div className={styles['btn-wrapper']}>
                {navButtonSection}
            </div>
            <div>
                {headerData.profile}
            </div>
        </header>
    )
}

export default Header;