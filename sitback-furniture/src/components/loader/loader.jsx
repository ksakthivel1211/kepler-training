import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import styles from './loader.module.scss'

const Loader = ()=>{

    return(
        <div className={styles['loader-wrapper']}>
            <ClimbingBoxLoader color='#ffdd00'></ClimbingBoxLoader>
            <ClimbingBoxLoader className={styles['second-loader']} color='#ffdd00'></ClimbingBoxLoader>
        </div>
    )
}


export default Loader;