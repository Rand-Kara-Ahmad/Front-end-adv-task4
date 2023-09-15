import classes from './Service.module.css'
import {items as services} from './../../../../data/services.jsx'
import {about} from './../../../../data/about.jsx'
import {Figure} from "react-bootstrap";
import img from './../../../../assets/images/services.jpg'

const Service = (props) => {
    return (
        <div className={classes.servicesSection}>
            <div className={classes.serviceContainer}>
                <div className={classes.serviceRow}>
                    <div className={classes.serviceDetails}>
                        <div className={classes.serviceTitle} data-aos="fade-up" data-aos-delay="0">
                            <h2>{props.sec === "service" ? services.title : about.title}</h2>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="100">{props.sec === "service" ? services.details : about.details}</p>
                        <ul className={classes.services} data-aos="fade-up" data-aos-delay="100">
                            {props.sec === "service" ?
                                services.services.map((item, key) => (
                                    <li key={key}>
                                        {item}
                                    </li>
                                ))
                                :
                                about.services.map((item, key) => (
                                    <li key={key}>
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                        {props.sec === "about" ?
                            <div className={classes.serviceStatistic} data-aos="fade-up" data-aos-delay="100">
                                {props.sec === "about" ? about.statistic.map((item, key) => (
                                    <div key={key} className={classes.serviceStatisticCard}>
                                        <span>{item.no}</span>
                                        <span>{item.title}</span>
                                    </div>
                                )) : null}
                            </div> : null}
                        <a href="#" data-aos="fade-up" data-aos-delay="100"
                           className={classes.servicesBtn}>{props.sec === "service" ? services.button : about.button}</a>
                        {props.sec === "about" ?
                            <a href="#" data-aos="fade-up" data-aos-delay="100"
                               className={`${classes.servicesBtnLearn} ${classes.servicesBtn}`}>{about.button2}</a>
                            : null}
                    </div>
                    <div className={classes.serviceImage} data-aos="fade-up" data-aos-delay="0">
                        <Figure>
                            <Figure.Image
                                className={classes.figure}
                                width={540}
                                height={677}
                                alt="Image"
                                src={img}
                            />
                        </Figure>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Service;
