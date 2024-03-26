import { useParams } from "react-router-dom";
import {cardData} from '../../data';
import Card from "../card/card";
import classes from './city-details.module.scss';

const CityDetail = ()=>{

    const {cityName} = useParams();
    const details = cardData.find((value)=> value.cityName === cityName);

    const fullDetailSection = details.cityFullDescription.map((value,index)=>(
        <p>{value}</p>
    ));

    const suggestionCities = cardData.map((data,index)=>{

        if(index<3){
            return (
                <Card key={index} cityName={data.cityName} 
                cityLine={data.cityOneLine}
                cityDescription={data.cityDesciption}
                cityImage={data.cityImg}></Card>)
        }
        return (<></>);
        }
   )

    return(
        <div>
           <section className={classes['details-section']}>
                <div className={classes['city-detail-wrapper']}>
                    <p className={classes['city-name-wrapper']}>{details.cityName}</p>
                    <p className={classes['city-line-wrapper']}>{details.cityOneLine}</p>
                    <p className={classes['city-temperature-wrapper']}>{details.cityTemperature}</p>
                </div>
                <div className={classes['img-holder']}>
                    <img src={details.cityImg} alt='city-pic'/>
                </div>
           </section>
           <section className={classes['city-description-wrapper']}>
                {fullDetailSection}
           </section>

           <section className={classes['recommendation-section']}>
            <h5>Similar Detatinations</h5>
            <p>Beacause you liked {details.cityName}</p>

            <div className={classes['card-holder']}>
                {suggestionCities}
            </div>
           </section>
        </div>
    )
}

export default CityDetail;