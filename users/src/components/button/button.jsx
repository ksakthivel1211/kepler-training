 import classes from './button.module.css';

 /**
  * 
  * @param {*} children, isSelected (boolean value) , onSelected (function for click event handling) are passed as props
  * @returns TabButton component is returned
  */
 const TabButton = ({children , onSelect , isSelected})=>{
        
    return (
            <button className={`${classes['button']} ${isSelected && classes['active']}`} onClick={onSelect}>{children}</button>
            
    )
}

export default TabButton;