import classes from './Hero.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Hero = (props) => {
    return (
        <section style={{backgroundImage:`url(${props.image})`}} className={classes.heroSection}>
            <Container className={classes.heroContainer}>
                <Row className={classes.heroRow}>
                    <Col lg={12} className={classes.heroCol12}>
                        <Row className={classes.heroRow}>
                            <Col lg={7} className={classes.heroCol6}>
                                <Link className={classes.heroTitle} to="/">{props.title}</Link>
                                <h1 className={classes.heroDesc}>{props.desc}</h1>
                                <h2 className={classes.heroSubTitle}>{props.subTitle}</h2>
                                <p className={classes.heroSubDesc}>{props.subDesc}</p>
                                <button className={classes.heroButton}>{props.button}</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
