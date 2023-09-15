import './App.css'
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import {Fragment} from "react";
import Footer from "./components/Footer/Footer.jsx";
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import AOS from 'aos'
import {useEffect} from "react";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <Fragment>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </Fragment>
    )
}

export default App
