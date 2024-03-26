import { Link } from 'react-router-dom';
import Button from '../../button/button';
import styles from './category-card.module.scss'
import { buttonData } from '../../../constants/string-constant';

const CategoryCard = ({id,photo,category,description})=>{

    return(
        <div className={styles['card-wrapper']}>
            <div className={styles['img-wrapper']}>
                <img src={photo} alt={id} onerror="this.onerror=null;this.src='../../../assets/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg';"/>
            </div>
            <h5>{category}</h5>
            <p>{description}</p>
            <Link to={`/shopping/${category.toLowerCase()}`}>
                <Button type='primary-btn'>{buttonData.shopNow}</Button>
            </Link>
        </div>
    )
}

export default CategoryCard;