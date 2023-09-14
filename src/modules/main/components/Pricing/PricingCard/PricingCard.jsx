import classes from './PricingCard.module.css'
const PricingCard = (props) => {
    return (
        <div className={classes.pricingCard}>
            <div className={classes.pricingContainer}>
                <div className={classes.pricingBody}>
                    <h3>{props.title}</h3>
                    <div><span>{props.price}</span>/month</div>
                    <p>{props.desc}</p>
                    <p className={classes.pricingBtn}><a href="#">{props.btn}</a></p>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
