import './../css/marcoMetrico.css';
import ButtonOrange from './../Components/subcomponents/ButtonOrange';

function AboutUs(){
    return(
        <div className="marcoMetrico">
            <div className="marcoMetrico__logoPage">
                <img src="https://mibucketcl2023.s3.amazonaws.com/images/about.png" alt="about.img" />
            </div>
            <div className="marcoMetrico__info">
                <p className="marcoMetrico__info__smallTitle">About Us</p>
                <p className="marcoMetrico__info__parrafoBig">We speak the good <br /> food language</p>
                <p className="marcoMetrico__info__parrafoSmall">It is a long established fact that a <br /> be distracted by the readable content <br /> looking at its layout. The point of </p>
                <ButtonOrange direction="/service" message="Learn More"/>
            </div>
        </div>
    )
};

export default AboutUs;