import classes from './NewsCard.module.css'
import {HiCalendar} from "react-icons/hi";

const NewsCard = (props) => {
    return (
            <div className={classes.card}>
                <div className={classes.cardContainer}>
                    <div className={classes.cardImage}>
                        <img src={props.image} alt="Image"/>
                    </div>
                    <div className={classes.cardBody}>
                        <h2  className={classes.cardTitle}><a href="#">{props.title}</a></h2>
                        <div className={classes.cardStatistic}>
                            <div className={classes.cardDate}><HiCalendar/> {props?.date} {props.user}</div>
                        </div>
                        <p className={classes.cardDesc}>{props.desc}</p>
                        <p className={classes.cardDesc}><a href="#">Learn More</a></p>
                    </div>
                </div>
            </div>
    );
};

export default NewsCard;
