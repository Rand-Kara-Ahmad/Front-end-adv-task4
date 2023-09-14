import {Fragment} from "react";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import Hero from "../../../components/Hero/Hero.jsx";
import TopCategory from "../components/TopCategory/TopCategory.jsx";
import Service from "../components/Service/Service.jsx";
import Classes from "../components/Classes/Classes.jsx";
import Courses from "../components/Courses/Courses.jsx";
import heroImage from './../../../assets/images/hero.jpg'
import enrollImage from './../../../assets/images/enroll.jpg'
import News from "../components/News/News.jsx";
import Pricing from "../components/Pricing/Pricing.jsx";
import WhyUs from "../components/WhyUs/WhyUs.jsx";
import WhyUsImg from "./../../../assets/images/whyUs/img-school-5-min.jpg";
import Footer from "../../../components/Footer/Footer.jsx";

const Main = () => {

    return (
        <Fragment>
            <Hero title=" Watch the video "
                  desc="Education is the Mother of Leadership"
                  image={heroImage}
                  button="Explore courses"/>
            <TopCategory title="Browse Top Category"/>
            <Service sec="service"/>
            <Classes title="We Have Best Education"
                     desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
            <Courses title="The Right Course For You"
                     desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
            <Hero subTitle="Education for Tomorrow's Leaders"
                  image={enrollImage}
                  subDesc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                  button="Enroll Now"
            />
            <Service sec="about"/>
            <News/>
            <Pricing title="Pricing"
                     desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
            <WhyUs title="Why Choose Us" img={WhyUsImg} desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
             there live the blind texts. " />
        </Fragment>
    );
};

export default Main;
