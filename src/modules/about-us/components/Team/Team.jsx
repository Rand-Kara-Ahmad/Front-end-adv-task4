import classes from './Team.module.css'
import {Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import SectionHeader from "../../../../components/SectionHeader/SectionHerder.jsx";
import {items} from './../../../../data/team.jsx'
import TeamCard from "./TeamCard/TeamCard.jsx";

const Team = () => {
    return (
        <div className={`${classes.team} bg-light`}>
            <Container>
                <SectionHeader title={"Our Team"}
                               desc={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."}/>

                <Row>
                    {items.map((item, key) => (
                        <TeamCard key={key} index={item.index} image={item.image} name={item.name} title={item.title} desc={item.desc}/>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Team;
