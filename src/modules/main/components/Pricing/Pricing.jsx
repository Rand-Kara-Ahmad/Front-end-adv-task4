import classes from './Pricing.module.css'
import SectionHeader from "../../../../components/SectionHeader/SectionHerder.jsx";
import PricingCard from "./PricingCard/PricingCard.jsx";
import {items} from "../../../../data/pricing.jsx";

const Pricing = (props) => {
    return (
        <div className={classes.pricingSection}>
            <div className={classes.pricingContainer}>
                <SectionHeader
                    title={props.title}
                    desc={props.desc}
                />
                <div className={classes.pricingRow}>
                    {items.map((item, key) => (
                        <PricingCard key={key} title={item.title} price={item.price}
                                     desc={item.desc} btn={item.btn}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
