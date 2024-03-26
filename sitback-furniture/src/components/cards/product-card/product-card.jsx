import Button from "../../button/button";
import styles from './product-card.module.scss';
import guaranteeImg from '../../../assets/icons/shield.png';
import alternateImg from '../../../assets/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg';
import {productCardData,buttonData} from '../../../constants/string-constant'

const ProductCard = ({id,name,photo,guarantee,rating,price,description,addToList,sideMenuOn,page,quantity})=>{

    const rate = parseInt(price).toLocaleString('en-IN',{style:'currency',currency:'INR',minimumFractionDigits: 0, maximumFractionDigits: 0});

    return(
        <div className={`${styles['card-wrapper']} ${sideMenuOn && styles['side-menu-on']} ${styles[page]}`}>
            
            <div className={styles['rotate-wrapper']}>
                <div className={styles['img-description-holder']}>
                    <div className={styles['img-holder']}>
                        <img src={photo} alt={name} onError={({currentTarget}) => {currentTarget.onerror = null;currentTarget.src=alternateImg;}}/>
                    </div>
                    <div className={styles['card-description']}>
                        {description}
                    </div>
                </div>
            </div>

            <div className={styles['heading-holder']}>
                <div className={styles['product-name']}>{name}</div>
                <div className={styles['product-price']}>{rate}</div>
            </div>
            {
                page==='order' && 
                <div className={styles['quantity']}>
                    {productCardData.quantity} : {quantity}
                </div>
            }
            <p className={styles['description']}>{description}</p>
            { page==='shopping' &&
            (<>
                <div className={styles['guarantee']}>
                <div className={styles['icon-wrapper']}>
                    <img src={guaranteeImg}/>
                </div> 
                <div>
                {guarantee} {productCardData.guarantee} {sideMenuOn}
                </div>
            </div>
            <div className={styles['divider']}/>
            <section className={styles['btn-section']}>
            <Button type='tertiary-btn' onSelect={()=>addToList('wishList',name,price,photo,description)}>{buttonData.addToWishList}</Button>
            <Button type='primary-btn' onSelect={()=>addToList('cart',name,price,photo,description,'increment')}>{buttonData.addToCart}</Button>
            </section>
            </>)
            }
        </div>
    )
}


export default ProductCard;