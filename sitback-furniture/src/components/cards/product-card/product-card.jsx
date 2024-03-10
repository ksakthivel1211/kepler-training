import Button from "../../button/button";
import styles from './product-card.module.scss';
import guaranteeImg from '../../../assets/icons/shield.png';

const ProductCard = ({id,name,photo,guarantee,rating,price,description})=>{

    return(
        <div className={styles['card-wrapper']}>
            <div className={styles['img-holder']}>
                <img src={photo} alt={name}/>
            </div>
            <div className={styles['heading-holder']}>
                <div className={styles['product-name']}>{name}</div>
                <div className={styles['product-price']}>₹ {price}</div>
            </div>
            <p className={styles['description']}>{description}</p>
            <p className={styles['guarantee']}>
                <div className={styles['icon-wrapper']}>
                    <img src={guaranteeImg}/>
                </div> 
                <div>
                {guarantee} YEAR GUARANTEE
                </div>
                </p>
            <hr/>
            <section className={styles['btn-section']}>
            <Button type='secondary-btn'>ADD TO WISHLIST</Button>
            <Button type='primary-btn'>ADD TO CART</Button>
            </section>
        </div>
    )
}


export default ProductCard;