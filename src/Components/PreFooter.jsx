import './../css/prefooter.css';
import ButtonOrange from './subcomponents/ButtonOrange';

function PreFooter(){
    return(
        <div className="prefooter">
            <div className="prefooter__fondo">
            
                <p className="prefooter__fondo__info">We Make quality food <br /> Everyday</p>
                <ButtonOrange direction="/menu" message="Learn More" />
            </div>
        </div>
    )
};

export default PreFooter;