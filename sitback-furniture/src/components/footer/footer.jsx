import styles from './footer.module.scss';
import { footerData } from '../../constants/string-constant';

const Footer = ()=>{

    return(
        <div className={styles['footer-wrapper']}>
            {footerData.copyrights}
        </div>
    )
}

export default Footer;