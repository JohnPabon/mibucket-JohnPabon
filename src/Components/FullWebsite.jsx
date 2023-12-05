import './../css/marcoMetrico.css';
import ButtonOrange from './subcomponents/ButtonOrange'

function FullWebsite(){
    return(
        <div className="marcoMetrico">
            <div className="marcoMetrico__info">
                <p className="marcoMetrico__info__title">Full Website</p>
                <p className="marcoMetrico__info__parrafo">Foods the <br /> Most precius thing</p>
                <ButtonOrange direction="/menu" message="Today's Menu" />
            </div>
            <div className="marcoMetrico__logoPage">
                <img src="https://mibucketcl2023.s3.amazonaws.com/images/home.png" alt='img' />
            </div>
        </div>
    )
};

export default FullWebsite;