import Button from '../../button/button';
import styles from './category-card.module.scss'

const CategoryCard = ({id,photo,category,description})=>{

    return(
        <div className={styles['card-wrapper']}>
            <div className={styles['img-wrapper']}>
                <img src={photo} alt={id}/>
            </div>
            <h5>{category}</h5>
            <p>{description}</p>
            <Button type='primary-btn'>SHOP NOW</Button>
        </div>
    )
}

export default CategoryCard;