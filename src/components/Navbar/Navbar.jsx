import classes from './Navbar.module.css';
import {Link} from "react-router-dom";
import {items} from "../../data/navItems.jsx";
import {RiArrowDownSLine} from "react-icons/ri";
import {useState} from "react";

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

    return (
        <nav className={classes.nav}>
            <div className={classes.topBar}>
                <div className={classes.topContainer}>
                    <div className={classes.topItems}>
                        <div className={classes.leftItems}>
                            {items.topItems.leftItems.map((item, key) => (
                                <Link key={key} to={item.to} className={classes.leftItem}>
                                    <span className={classes.leftItemIcon}>
                                        {item.icon}
                                    </span>
                                    <span className={classes.leftItemTitle}>{item.title}</span>
                                </Link>
                            ))}
                        </div>
                        <div className={classes.rightItems}>
                            {items.topItems.rightItems.map((item, key) => (
                                <a key={key} href={item.to} className={classes.rightItem}>
                                    <span className={classes.rightItemIcon}>
                                        {item.icon}
                                    </span>
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={fixedNav?classes.bottomBarScroll: classes.bottomBar}>
                <div className={classes.bottomContainer}>
                    <div className={classes.bottomItems}>
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
                                            <li key={key}>
                                                <Link
                                                    className={fixedNav ? `${classes.bottomItemScroll} ${classes.bottomItem}` : classes.bottomItem}
                                                    to={item.to}>{item.title}</Link>
                                            </li>
                                        }
                                    </>
                                ))}
                            </ul>
                            <Link className={fixedNav ? `${classes.btnScroll} ${classes.btn}` : classes.btn}
                                  to="#">{items.btn}</Link>
                            <Link to="#"
                                  className="menu-toggle"
                                  data-toggle="collapse" data-target="#main-navbar">
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
