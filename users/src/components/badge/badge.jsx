import classes from './badge.module.css'

/**
 * 
 * @param {*} children are passed as props
 * @returns - Badge component
 */
const Badge = ({children})=>{
    return (
            <div className={classes.badgeWrapper}>{children}</div>
    )
}

export default Badge;