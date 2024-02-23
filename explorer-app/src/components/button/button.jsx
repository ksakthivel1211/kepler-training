import classes from "./button.module.css";

const Button = ({buttonType,children,section})=>{

    return (
        <button className={`${classes[buttonType]} roboto-medium ${classes['btn']} ${classes[section]}`}>
            {children}
        </button>
    );

}

export default Button;