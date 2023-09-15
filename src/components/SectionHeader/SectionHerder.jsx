import classes from './SectionHeader.module.css'
const SectionHeader = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.title}  data-aos="fade-up" data-aos-delay="0">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>

    );
};

export default SectionHeader;
