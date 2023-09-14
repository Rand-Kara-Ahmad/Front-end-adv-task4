import classes from'./Courses.module.css'
import SectionHeader from "../../../../components/SectionHeader/SectionHerder.jsx";
import {items} from './../../../../data/courses.jsx'
import CourseCard from "./CourseCard/CourseCard.jsx";
const Courses = (props) => {
    return (
        <div className={classes.coursesSection}>
            <div className={classes.coursesContainer}>
                <SectionHeader title={props.title} desc={props.desc} />
                <div className={classes.coursesBody}>
                    {items.map((item,key)=>(
                        <CourseCard key={key}
                                    title={item.title}
                                    lessons={item.lessons}
                                    review={item.review}
                                    desc={item.desc}
                                    img={item.img}
                                    price={item.price}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
