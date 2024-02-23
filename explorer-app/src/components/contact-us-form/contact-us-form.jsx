import Button from '../button/button';
import classes from './contact-us-form.module.scss';

const ConcactUsForm = ()=>{

    return (
        <section className={classes['form-wrapper']}>
            <form>
                <h5>Contact Us</h5>
                <p>Our Sales Team will reach out to you ASAP!</p>
                <label>Name</label>
                <input></input>
                <label>Your Home Town</label>
                <select>
                    <option>Choose</option>
                </select> 
                <label>Where would you like to go?</label>
                <select>
                    <option>Choose</option>
                </select>
                <label>Contact Number</label>
                <input></input>

                <Button className={classes['form-btn']} buttonType={'primary'}>SUBMIT INTEREST</Button>
            </form>
        </section>
    )
};

export default ConcactUsForm;