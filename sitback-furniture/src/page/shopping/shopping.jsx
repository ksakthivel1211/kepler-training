import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import ProductCard from "../../components/cards/product-card/product-card";
import styles from './shopping.module.scss';

const Shopping = ()=>{

    const {categoryId} = useParams();

    const [productData,setData] = useState();
    const [isLoading,settIsLoading] = useState(true);

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
                setData(responseValue)
                settIsLoading(false);
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
        </main>
    )
}

export default Shopping;