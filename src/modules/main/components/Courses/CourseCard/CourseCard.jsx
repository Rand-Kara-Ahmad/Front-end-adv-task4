import classes from './CourseCard.module.css'
import {Link} from "react-router-dom";
import {AiFillStar} from "react-icons/ai";
import {HiOutlineBookOpen} from "react-icons/hi";

const CourseCard = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardContainer}>
                <Link to="/" className={classes.cardImage}><img src={props.img} alt=""/></Link>
                <div className={classes.cardBody}>
                    <div className={classes.cardStatistic}>
                        <div className={classes.cardLessons}><HiOutlineBookOpen style={{marginBottom:5}}/> {props.lessons} lesson</div>
                        <div className={classes.cardReview}><AiFillStar style={{marginBottom:5}}/> {props.review}</div>
                    </div>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <div className={classes.cardFooter}>
                        <div><span className={classes.cardPrice}>{props.price}</span></div>
                        <div><a className={classes.learn} href="#">Learn More</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
