import classes from './TopCategory.module.css'
import {items} from './../../../../data/categories.jsx'
import SectionHeader from "../../../../components/SectionHeader/SectionHerder.jsx";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
const TopCategory = (props) => {
    return (
        <section className={classes.topCategory}>
                <Container>
                    <SectionHeader title={props.title} />

                    <Row className="align-items-stretch">
                        {items.map((item ,key)=>(
                            <Col sm={6} md={6} lg={3} key={key} className={"mb-4"}>
                                <a href="#" className={` d-flex align-items-start h-100 ${classes.category}`}>
                                    <div className={classes.icon}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <span>{item.courses} courses</span>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>

                    <div className={classes.footer}>
                        <div className={classes.footerContainer}>
                            <p>We have more category here. <a href="#">Browse all</a></p>
                        </div>
                    </div>
                </Container>
        </section>
    );
};

export default TopCategory;
