import classes from './destination-section.module.scss';
import {cardData} from '../../data';
import Card from '../card/card';

const DestinationSection = ()=>{

    const cards = cardData.map((value,index)=>(
        <Card cityName={value.cityName} cityDescription={value.cityDesciption} cityImage={value.cityImg} cityLine={value.cityOneLine}/>
    ))

    return (
        <section className={classes['destination-wrapper']}>
            <h6>Destinations</h6>
            <p>Just for you. Because you and your bike special to us!</p>

            <div className={classes['card-holder']}>
                {cards}
            </div>

        </section>
    )
};

export default DestinationSection;