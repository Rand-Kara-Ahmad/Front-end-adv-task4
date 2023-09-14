import classes from './News.module.css'
import SectionHeader from "../../../../components/SectionHeader/SectionHerder.jsx";
import {news} from './../../../../data/news.jsx'
import NewsCard from "./NewsCard/NewsCard.jsx";

const News = () => {
    return (
        <div className={classes.newsSection}>
            <div className={classes.newsContainer}>
                <SectionHeader title="School News"
                               desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                <div className={classes.newsBody}>
                    {news.map((item, key) => (
                        <NewsCard key={key} title={item.title}
                                  image={item.image} date={item.date}
                                  user={item.user} desc={item.desc}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
