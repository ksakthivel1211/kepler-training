import { Link } from 'react-router-dom';
import Button from '../button/button';
import classes from './card.module.scss';

const Card = ({cityName,cityLine,cityDescription,cityImage})=>{

    const scrollToTop = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={classes['card-wrapper']}>
            <div>
                <img src={cityImage} alt='city-pic'/>
            </div>
            <p className={classes['city-line']}>{cityLine}</p>
            <h6>{cityName}</h6>
            <p className={classes['city-description']}>{cityDescription}</p>

            <Link to = {`/${cityName}`}>
                <Button buttonType={'primary'}>READ MORE</Button>
            </Link>

        </div>
    )
}

export default Card;