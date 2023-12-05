import './../../css/buttonOrange.css';
import { Link } from 'react-router-dom';

function ButtonOrange(props){
    return(
        <div className="buttonOrange">
            <Link to={props.direction}>{props.message}</Link>
        </div>
    )
};

export default ButtonOrange;