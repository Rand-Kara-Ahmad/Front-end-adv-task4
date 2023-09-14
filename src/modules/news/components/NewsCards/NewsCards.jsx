import classes from './NewsCards.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row} from "react-bootstrap";
import {items} from './../../../../data/newsPage.jsx'
import NewsCard from "./NewsCard/NewsCard.jsx";
const NewsCards = () => {
    return (
        <div className={`${classes.NewsSection} bg-light`}>
            <Container>
                <Row className="align-items-stretch">
                    {items.map((item,key)=>(
                        <NewsCard key={key} title={item.title} date={item.date} desc={item.desc} image={item.image} user={item.user} />
                    ))}
                </Row>
            </Container>
        </div>
);
};

export default NewsCards;
