import styles from './button.module.scss';

const Button = ({type,children,onSelect,isSelected,section,size})=>{

    return (
        <div className={`${styles['btn-wrapper']} ${styles[section]}`}>
        <button className={`${styles[type]} ${styles['btn']} ${styles[size]} ${styles[isSelected && 'selected']}`} onClick={onSelect}>
            {children}
        </button>
        {
            (section === 'header'||'side-menu') &&
            <div className={`${isSelected && styles['active-tab']} ${styles['tab']}`}></div>
        }
        </div>
    )
}

export default Button;