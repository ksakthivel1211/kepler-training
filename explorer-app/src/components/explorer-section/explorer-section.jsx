import exploreImg from '../../assets/explorer.webp';
import Button from '../button/button';
import classes from './explorer-section.module.scss';

const ExplorerSection = ()=>{

    const exploreOptionValues = ['Choose','Madura','Florida'];

    const exploreOptions = exploreOptionValues.map((val)=>(
        <option value={val}>{val}</option>
    ))

    return (
        <section className={classes['section-wrapper']}>
            <div className={classes['explorer-section']}>
                <h6>WELCOME TO EXPLORER</h6>
                <p>Your Adventure Travel Expert in the <span>SOUTH</span></p>
                <select>
                    {exploreOptions}
                </select>
                <Button buttonType={'primary'} section={'explore'}>EXPLORE</Button>
            </div>
            <div>
                <div className={classes['img-holder']}>
                    <img src={exploreImg} alt='explorer'></img>
                </div>
            </div>

        </section>
    )
}

export default ExplorerSection;