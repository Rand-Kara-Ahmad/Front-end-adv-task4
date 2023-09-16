import classes from './Navbar.module.css';
import './mobile.css';
import {Link} from "react-router-dom";
import {items} from "../../data/navItems.jsx";
import {RiArrowDownSLine} from "react-icons/ri";
import {Fragment, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from "react-bootstrap";
import {HiOutlineMenu} from "react-icons/hi";

const Navbar = () => {
    const [fixedNav, setFixedNav] = useState(false);
    const changNav = () => {
        if (window.scrollY > 25) {
            setFixedNav(true);
        } else {
            setFixedNav(false);
        }
    }
    window.addEventListener("scroll", changNav);
    const [activeItem, setActiveItem] = useState(null);
    const handleClick = (item) => {
        setActiveItem(item);
    };
    return (
        <Fragment>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body">
                    <ul className="site-nav-wrap">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li className="has-children"><span className="arrow-collapse collapsed" data-toggle="collapse"
                                                           data-target="#collapseItem0"></span>
                            <a href="#">Dropdown</a>
                            <ul className="collapse" id="collapseItem0">
                                <li><a href="elements.html">Elements</a></li>
                                <li className="has-children"><span className="arrow-collapse collapsed"
                                                                   data-toggle="collapse"
                                                                   data-target="#collapseItem1"></span>
                                    <a href="#">Menu Two</a>
                                    <ul className="collapse" id="collapseItem1">
                                        <li><a href="#">Sub Menu One</a></li>
                                        <li><a href="#">Sub Menu Two</a></li>
                                        <li><a href="#">Sub Menu Three</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Menu Three</a></li>
                            </ul>
                        </li>
                        <li><a href="staff.html">Our Staff</a></li>
                        <li><a href="news.html">News</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
            <nav className={classes.nav}>
                <div className={classes.topBar}>
                    <Container>
                        <Row className={classes.topItems}>
                            <Col lg={9} className={`${classes.leftItems} col-6`}>
                                {items.topItems.leftItems.map((item, key) => (
                                    <Link key={key} to={item.to} className={`${classes.leftItem} col-md-3`}>
                                    <span className={classes.leftItemTitle}>
                                        <i className={classes.leftItemIcon}>
                                        {item.icon}
                                        </i>
                                        {item.title}
                                    </span>
                                        <span>
                                        <i className={classes.leftItemIconS}>
                                        {item.icon}
                                        </i>
                                    </span>
                                    </Link>
                                ))}
                            </Col>
                            <Col lg={9} className={`${classes.rightItems} col-6`}>
                                {items.topItems.rightItems.map((item, key) => (
                                    <a key={key} href={item.to} className={`${classes.rightItem} `}>
                                        <i className={classes.rightItemIcon}>
                                            {item.icon}
                                        </i>
                                        <span>{item.title}</span>
                                    </a>
                                ))}
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={fixedNav ? `${classes.bottomBarScroll} ${classes.bottomBar}` : classes.bottomBar}>
                    <div className={classes.bottomContainer}>
                        <Container className={"position-relative"}>
                            <div className={classes.bottomList}>
                                <Link to="/"
                                      className={fixedNav ? `${classes.bottomLogoScroll} ${classes.bottomLogo}` : classes.bottomLogo}>{items.logo}</Link>
                                <ul>
                                    {items.bottomItems.map((item, key) => (
                                        <>
                                            {item.hasChildren ?
                                                <li key={key} className={classes.hasChildren}>
                                                    <Link
                                                        className={fixedNav ? `${classes.bottomItemScroll} ${classes.bottomItem}` : classes.bottomItem}
                                                        to={item.to}>
                                                        <RiArrowDownSLine
                                                            className={fixedNav ? `${classes.bottomItemScroll} ${classes.dropdownIcon}` : classes.dropdownIcon}/>
                                                        {item.title}
                                                    </Link>
                                                    <ul>
                                                        {item.children.map((child, ke) => (
                                                            <>
                                                                {child.hasChildren ?
                                                                    <li key={ke} className={classes.hasChildren}>
                                                                        <Link to={child.to}>{child.title}</Link>
                                                                        <ul className={classes.hasChildren}>
                                                                            {child.children.map((c, k) => (
                                                                                <li key={k}><Link
                                                                                    to={c.to}>{c.title}</Link></li>
                                                                            ))}
                                                                        </ul>
                                                                    </li>
                                                                    :
                                                                    <li key={ke}>
                                                                        <Link to={child.to}>{child.title}</Link>
                                                                    </li>
                                                                }</>
                                                        ))}
                                                    </ul>
                                                </li> :
                                                <li key={key}
                                                    className={` ${activeItem === item.title ? " active " : ""} `}>
                                                    <Link onClick={() => handleClick(item.title)}
                                                          className={`${fixedNav ? `${classes.bottomItemScroll} ${classes.bottomItem}` : classes.bottomItem}`}
                                                          to={item.to}>{item.title}</Link>
                                                </li>
                                            }
                                        </>
                                    ))}
                                </ul>
                                <Link className={fixedNav ? `${classes.btnScroll} ${classes.btn}` : classes.btn}
                                      to="#">{items.btn}</Link>

                                <a href="#" style={fixedNav ? {color:"black"}:null}
                                   className={` ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block light ${classes.btnMenu}`}
                                   data-toggle="collapse" data-target="#main-navbar">
                                    <HiOutlineMenu/>
                                </a>
                            </div>
                        </Container>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
