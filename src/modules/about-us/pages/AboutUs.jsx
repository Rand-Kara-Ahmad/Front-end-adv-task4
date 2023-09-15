import {Fragment} from "react";
import Hero from "../../../components/Hero/Hero.jsx";
import img from './../../../assets/images/enroll.jpg'
import Service from "../../main/components/Service/Service.jsx";
import Classes from "../../main/components/Classes/Classes.jsx";
import WhyUs from "../../main/components/WhyUs/WhyUs.jsx";
import WhyUsImg from "../../../assets/images/whyUs/img-school-5-min.jpg";
import Team from "../components/Team/Team.jsx";
const AboutUs = () => {
    return (
        <Fragment>
            <Hero desc={"About Us"}
                  subDesc={"Another free template by Untree.co. Far far away, " +
                      "behind the word mountains, far from the countries Vokalia and Consonantia, there live.\n"}
                  image={img}
                  button={"Explorer Courses"}
            />
            <Service sec="service"/>
            <Team/>
            <Classes title="We Have Best Education"
                     desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
            <WhyUs title="Why Choose Us" img={WhyUsImg} desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
             there live the blind texts. " />
        </Fragment>
    );
};

export default AboutUs;
