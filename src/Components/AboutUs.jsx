import { Link } from 'react-router-dom';

function AboutUs(){
    return(
        <div>
            <div>
                <img src="" alt="about.img" />
            </div>
            <div>
                <h3>About Us</h3>
                <h2>We speak the good <hr /> food language</h2>
                It is a long established fact that a be distracted by the readable content looking at its layout. The point of
            </div>
            <Link to="/service">Learn More</Link>
        </div>
    )
};

export default AboutUs;