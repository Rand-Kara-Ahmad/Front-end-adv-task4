import classes from './CLasses.module.css'
import {items} from './../../../../data/classes.jsx'
import SectionHeader from "../../../../components/SectionHeader/SectionHerder.jsx";
const Classes = (props) => {
    return (
        <section className={classes.classesSection}>
            <div className={classes.classesContainer}>
                <SectionHeader title={props.title} desc={props.desc} />
                <div className={classes.classesCards}>
                    {items.map((item,key)=>(
                        <div key={key} className={classes.classesCard} data-aos="fade-up"
                             data-aos-delay={key < 3 ? key * 100 : (key-3) * 100}>
                            <div className={classes.cardContainer}>
                                <div className={classes.cardIcon}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;
