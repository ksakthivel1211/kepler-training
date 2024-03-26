import { useEffect, useState } from 'react';
import Button from '../button/button';
import SideMenuCard from '../cards/side-menu-card/side-menu-card';
import styles from './side-menu.module.scss';
import { buttonData,sideMenuData } from '../../constants/string-constant';

const SideMenu = ({onOrderConfirm,cartData,wishListData,tabChange,totalAmount,onQuantityUpdate})=>{

    const [selectedTab,setSelectedTab] = useState();
    const rate = parseInt(totalAmount).toLocaleString('en-IN',{style:'currency',currency:'INR',minimumFractionDigits: 0, maximumFractionDigits: 0});

    const onTabChange = (buttonValue)=>
    {
        localStorage.setItem('selectedTab',buttonValue);
        setSelectedTab(buttonValue);
    }

    useEffect(()=>{
        setSelectedTab(tabChange)
        localStorage.setItem('selectedTab',tabChange);
    },[tabChange]);

    const sideMenuCartCard = cartData?.map((value,index)=>(
        <SideMenuCard 
        key={index}
        name={value.product}
        price={value.productPrice}
        photo={value.photo}
        type='cart'
        quantity={value.quantity}
        onQuantityChange={onQuantityUpdate}/>
    ));

    const sideMenuWishListCard = wishListData?.map((value,index)=>(
        <SideMenuCard 
        key={index}
        name={value.product}
        price={value.productPrice}
        photo={value.photo}
        description={value.details}
        type='wishList'
        onQuantityChange={onQuantityUpdate}/>
    ));

    return(
        <section className={styles['side-menu-wrapper']}>
        <header>
            <Button type='secondary-btn'
            isSelected={'myCart' === localStorage.getItem('selectedTab')} 
            onSelect = {()=>onTabChange('myCart')}
            section='side-menu'>
                
                {buttonData.addToCart}
                
            </Button>

            <Button type='secondary-btn'
            isSelected={'myWishList' === localStorage.getItem('selectedTab')} 
            onSelect = {()=>onTabChange('myWishList')}
            section='side-menu'>
                
                {buttonData.addToWishList}
                
            </Button>

        </header>
        <main className={styles['side-menu-content']}>
        {(localStorage.getItem('selectedTab') === 'myCart' && sideMenuCartCard) || (localStorage.getItem('selectedTab') === 'myWishList' && sideMenuWishListCard)}
        </main>
        {
            selectedTab === 'myCart' && 
            <footer className={styles['footer-wrapper']}>
                <div>
                    <p>{sideMenuData.totalAmount}</p>
                    <div>{rate}</div>
                </div>
                <div>
                    <Button type='primary-btn' onSelect={onOrderConfirm}>{buttonData.placeOrder}</Button>
                </div>
            </footer>
        }
    </section>
    )
}

export default SideMenu