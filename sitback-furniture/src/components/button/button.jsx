import styles from './button.module.scss';

const Button = ({type,children,onSelect,isSelected,section})=>{

    return (
        <div className={`${styles['btn-wrapper']} ${styles[section]}`}>
        <button className={`${styles[type]} ${styles['btn']}`} onClick={onSelect}>
            {children}
        </button>
        {
            section === 'header' &&
            <div className={`${isSelected && styles['active-tab']} ${styles['tab']}`}></div>
        }
        </div>
    )
}

export default Button;