import classes from './WhyUs.module.css'
import {Accordion, Col, Container, Row} from "react-bootstrap";
import {items} from './../../../../data/accordion.jsx'
import AccordionItem from "react-bootstrap/AccordionItem";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const WhyUs = (props) => {
    return (
        <div className={classes.whySection}>
            <Container>
                <Row>
                    <Col lg={5} className={"me-auto mb-5 mb-lg-0 aos-init aos-animate"} data-aos="fade-up" data-aos-delay="0">
                        <img src={props.img} alt="image" className="img-fluid"/>
                    </Col>
                    <Col lg={7} className={"ml-auto aos-init aos-animate"} data-aos="fade-up" data-aos-delay="100">
                        <h3 className={`${classes.lineBottom} line-bottom mb-4`}>{props.title}</h3>
                        <p>{props.desc}</p>
                        <Accordion defaultActiveKey={0}>
                            {items.map((item, key) => (
                                <AccordionItem className={classes.accordion} key={key} eventKey={key}>
                                    <Accordion.Header className={classes.accordionHeader}>{item.title}</Accordion.Header>
                                    <Accordion.Body className={classes.accBody}>
                                        <div className={"d-flex"}>
                                            <div className={`${classes.AccImage} me-4`}>
                                                <img className={"img-fluid"} src={item.image}/>
                                            </div>
                                            {item.desc}
                                        </div>
                                    </Accordion.Body>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
// <div className="accordion-item active">
//     <h2 className="mb-0">
//         <button className="btn btn-link" type="button" data-toggle="collapse"
//                 data-target="#collapseOne" aria-expanded="true"
//                 aria-controls="collapseOne">Good Teachers and Staffs
//         </button>
//     </h2>
//
//     <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
//          data-parent="#accordion_1">
//         <div className="accordion-body">
//             <div className="d-flex">
//                 <div className="accordion-img mr-4">
//                     <img src="images/img-school-1-min.jpg" alt="Image"
//                          className="img-fluid">
//                 </div>
//                 <div>
//                     <p>Far far away, behind the word mountains, far from the countries
//                         Vokalia and Consonantia, there live the blind texts. </p>
//                     <p>Separated they live in Bookmarksgrove right at the coast of the
//                         Semantics, a large language ocean.</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

export default WhyUs;
