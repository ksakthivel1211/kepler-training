import axios from 'axios';
import { useEffect, useState } from 'react';
import CategoryCard from '../../components/cards/category-card/category-card';
import styles from './home.module.scss';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const Home = ()=>{

    const [categoryData,setData] = useState();
    const [isLoading,settIsLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async ()=>{
            
            try{
                const res = await axios.get('https://jsonmockserver.vercel.app/api/shopping/furniture/categories');
                const responseValue = res.data.map((val,index)=>(
                    <>
                        <CategoryCard 
                        key={index}
                        photo={val.photo} 
                        category={val.category}
                        id={val.id}
                        description={val.description}/>
                    </>
                ));
                setData(responseValue);
                settIsLoading(false);
            }
            catch(err)
            {
                console.log(err);
            }

        };
        fetchData();
    },[]);


    return (
        <main className={styles['home-page-wrapper']}>
            <h5 className={styles['heading']}>Your Home, With Love</h5>
            <p className={styles['sub-heading']}>Come, Choose from millions of products</p>
            <div className={styles['card-holder']}>
                {
                    isLoading ?
                    (<ClimbingBoxLoader color='#ffdd00'></ClimbingBoxLoader>)
                    :
                    (
                        <>
                            {categoryData}
                        </>

                        )
                }
            </div>

        </main>
    )
}

export default Home;