import styles from './counter.module.scss';

const Counter = ({count,onCountUpdate})=>{

    return(
        <div className={styles['counter-button-wrapper']}>
            <div className={styles['update-btn']} onClick={()=>onCountUpdate('decrement')}>-</div>
            <div>{count}</div>
            <div className={styles['update-btn']} onClick={()=>onCountUpdate('increment')}>+</div>
        </div>
    )
}

export default Counter;