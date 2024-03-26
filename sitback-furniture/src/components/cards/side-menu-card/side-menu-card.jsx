import Button from '../../button/button';
import Counter from '../../counter/counter';
import styles from './side-menu-card.module.scss';
import { buttonData } from '../../../constants/string-constant';

const SideMenuCard = ({name,price,photo,type,quantity,description,onQuantityChange})=>{

    const onCounterChange = (value)=>{
        onQuantityChange(type,name,price,'','',value)
    }
    const rate = parseInt(price).toLocaleString('en-IN',{style:'currency',currency:'INR',minimumFractionDigits: 0, maximumFractionDigits: 0});

    return(
        <div className={`${styles['card-wrapper']} `}>
            <div className={styles['product-name-wrapper']}>{name}</div>
            <div>{rate}</div>
            <div className={styles['img-wrapper']}>
                <img src={photo}/>
            </div>
            <div className={styles['button-wrapper']}>
                {type==='cart' ? <Counter count={quantity} onCountUpdate={onCounterChange}/> : 
                <Button type='primary-btn' size='small' onSelect={()=>onQuantityChange('cart',name,price,photo,description,'increment')}>{buttonData.addToCart}</Button>}
            </div>
        </div>
    )
}

export default SideMenuCard;