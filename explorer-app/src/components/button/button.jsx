import classes from "./button.module.scss";

const Button = ({buttonType,children,section,onClickFunction})=>{

    return (
        <button onClick={onClickFunction} className={`${classes[buttonType]} roboto-medium ${classes['btn']} ${classes[section]}`}>
            {children}
        </button>
    );

}

export default Button;