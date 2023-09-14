import classes from './Footer.module.css'
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import im1 from './../../assets/images/footer/gal_1.jpg'
import im2 from './../../assets/images/footer/gal_2.jpg'
import im3 from './../../assets/images/footer/gal_3.jpg'
import im4 from './../../assets/images/footer/gal_4.jpg'
import im5 from './../../assets/images/footer/gal_5.jpg'
import im6 from './../../assets/images/footer/gal_6.jpg'
import {FaDribbble, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <Container>
                <Row>
                    <Col lg={3} className={"me-auto"}>
                        <div className={classes.widget}>
                            <h3>About Us</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                        <div className={classes.widget}>
                            <h3>Connect</h3>
                            <ul className={` ${classes.listUnstyled} ${classes.social}`}>
                                <li><a href=""><FaInstagram></FaInstagram></a></li>
                                <li><a href=""><FaTwitter/></a></li>
                                <li><a href=""><FaFacebook/></a></li>
                                <li><a href=""><FaLinkedin/></a></li>
                                <li><a href=""><FaPinterest/></a></li>
                                <li><a href=""><FaDribbble/></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2} className={"ms-auto"}>
                        <div className={classes.widget}>
                            <h3>Projects</h3>
                            <ul className={` ${classes.listUnstyled} ${classes.links}`}>
                                <li><a href="">Web Design</a></li>
                                <li><a href="">HTML5</a></li>
                                <li><a href="">CSS3</a></li>
                                <li><a href="">jQuery</a></li>
                                <li><a href="">Bootstrap</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={classes.widget}>
                            <h3>Gallery</h3>
                            <ul className={`${classes.gallery} ${classes.listUnstyled}`}>
                                <li>
                                    <a>
                                        <img src={im1} width="72" height="72"/>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={im2} width="72" height="72"/>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={im3} width="72" height="72"/>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={im4} width="72" height="72"/>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={im5} width="72" height="72"/>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={im6} width="72" height="72"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={classes.widget}>
                            <h3>Contact</h3>
                            <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                            <ul className={`${classes.listUnstyled} ${classes.links} mb-4`}>
                                <li><a href="">+1(123)-456-7890</a></li>
                                <li><a href="">+1(123)-456-7890</a></li>
                                <li><a href="">rand@randombyte.co</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <div className="col-12 text-center">
                        <p>Copyright © {(new Date().getFullYear())}. All Rights Reserved. — Designed with love by Rand Ahmad
                        </p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
