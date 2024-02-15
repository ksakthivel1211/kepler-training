import classes from './card.module.css';
import Badge from '../badge/badge';

/**
 * Card component has image section and user details section . user details section has username , location 
 * and the hobbbies are displayed as list of badge components
 * 
 * @param {*} userName as string, img as string, location as string, hobbies as array of strings are passed as props 
 * @returns - Card components is returned
 */

const Card = ({userName,img,location,hobbies})=>{
    return (
            <div className={classes['card-wrapper']}>

                <div className={classes['img-wrapper']}>
                <img className={classes['img']} src={img} alt={userName}></img>
                </div>
                <div className={classes['user-details-wrapper']}>
                    <h2 className={`${classes['content-overflow']} ${'merriweather-black'}`}>{userName}</h2>
                    <p className={`${classes['content-overflow']} ${classes['location']}`}>{location}</p>
                    
                    <div className={classes['badge-holder']}>
                    {hobbies.map((value,index)=>(
                    <Badge key={index}>{value}</Badge>
                    ))}
                    </div>

                </div>
            </div>
    )
}

export default Card;