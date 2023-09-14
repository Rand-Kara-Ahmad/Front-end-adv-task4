import {Fragment} from "react";
import img from "../../../assets/images/news.jpg";
import Hero from "../../../components/Hero/Hero.jsx";
import NewsCards from "../components/NewsCards/NewsCards.jsx";

const News = () => {

    return (
        <Fragment>
            <Hero desc={"News"}
                  subDesc={"Another free template by Untree.co. Far far away, " +
                      "behind the word mountains, far from the countries Vokalia and Consonantia, there live.\n"}
                  image={img}
                  button={"Explorer Courses"}
            />
            <NewsCards />
        </Fragment>
    );
};

export default News;
