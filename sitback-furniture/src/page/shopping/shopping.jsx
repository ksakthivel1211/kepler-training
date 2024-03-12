import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import Button from "../../components/button/button";
import ProductCard from "../../components/cards/product-card/product-card";
import styles from './shopping.module.scss';

const Shopping = ()=>{

    const {categoryId} = useParams();
    const [productData,setProductData] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const [selectedTab,setSelectedTab] = useState();

    function onTabChange(buttonValue)
    {
        setSelectedTab(buttonValue)
    }

    const [cartWishListData,setcartWishListData] = useState(
        {
            cartQuantity:'0',
            cartItems:[],
            wishListQuantity:'0',
            wishListItems:[]
        }
    );

    useEffect(()=>{
        const fetchData = async ()=>{
            
            try{
                const res = await axios.get('https://jsonmockserver.vercel.app/api/shopping/furniture/products',{
                    params:{
                        category:categoryId
                    }
                });
                const responseValue = res.data.map((val,index)=>(
                    <>
                    <ProductCard name={val.name}
                    photo={val.photo}
                    guarantee={val.guarantee}
                    price={val.price}
                    description={val.description}/>
                    </>
                ))
                setProductData(responseValue)
                setIsLoading(false);
            }
            catch(err)
            {
                console.log(err);
            }

        };
        fetchData();
    },[]);

    return(
        <main className={styles['shopping-page-wrapper']}>
            <section className={styles['shopping-section']}>
            {
                    isLoading ?
                    (<ClimbingBoxLoader color='#ffdd00'></ClimbingBoxLoader>)
                    :
                    (
                        <div className={styles['card-holder']}>
                            {productData}
                        </div>
                        )
                }
            </section>
            {  (cartWishListData.cartQuantity>0 || cartWishListData.wishListItems>0) &&         
            <section className={styles['side-menu']}>
                <header>
                    <Button type='secondary-btn'
                    isSelected={'myCart' === selectedTab} 
                    onSelect = {()=>onTabChange('myCart')}
                    section='header'>
                        
                        MY CART
                    
                    </Button>

                    <Button type='secondary-btn'
                    isSelected={'myWishList' === selectedTab} 
                    onSelect = {()=>onTabChange('myWishList')}
                    section='header'>
                        
                        MY WISHLIST
                        
                    </Button>

                </header>
                <main className={styles['side-menu-content']}>
                {'content'}
                </main>
                <footer>
                    footer
                </footer>
            </section>
            }
        </main>
    )
}

export default Shopping;