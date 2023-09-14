import './App.css'
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import {Fragment} from "react";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    return (
        <Fragment>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </Fragment>
    )
}

export default App
