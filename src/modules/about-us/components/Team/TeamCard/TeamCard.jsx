import 'bootstrap/dist/css/bootstrap.min.css'
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import classes from './TeamCard.module.css'

const TeamCard = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4">
            <div className={`${classes.staff} text-center`}>
                <div className="mb-4">
                    <img src={props.image} alt="Image" className="img-fluid"/>
                </div>
                <div className="staff-body">
                    <h3 className="staff-name">{props.name}</h3>
                    <span className="d-block position mb-4">{props.title}</span>
                    <p className="mb-4">{props.desc}</p>
                    <div className="social">
                        <a href="#" className="mx-2"><FaFacebook/></a>
                        <a href="#" className="mx-2"><FaTwitter/></a>
                        <a href="#" className="mx-2"><FaLinkedin/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
