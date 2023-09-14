import classes from './NewsCard.module.css';
import {Col} from "react-bootstrap";

const NewsCard = (props) => {
    return (
        <Col lg={6} className="mb-4">
            <div className={`${classes.card} d-flex h-100`}>
                <div className={classes.figure}><img src={props.img} alt="Image"/></div>
                <div className={classes.cardBody}>
                    <h2 className="mb-3"><a href="#">{props.title}</a></h2>
                    <div className={classes.cardMeta}>
                        <span className="icon-calendar mr-2"></span>
                        <span>{props.date}</span>
                        <span className="icon-person mr-2"></span>Untree.co
                    </div>
                    <p className={classes.cardDesc}>{props.desc}</p>
                </div>
            </div>
        </Col>

    );
};

export default NewsCard;
