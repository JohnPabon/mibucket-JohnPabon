import './../css/selectMetrica.css';

function Services(){
    return(
        <div className="selectMetrica">
            <div className="selectMetrica__info">
                <p className="selectMetrica__info__title">Services</p>
                <p className="selectMetrica__info__parrafo">We provide best food services</p>
            </div>
            <div className="selectMetrica__cards">
                <div className="selectMetrica__cards__dataTwo">
                    <img src="https://mibucketcl2023.s3.amazonaws.com/images/s1.png" alt="img" />
                    <p className="selectMetrica__cards__dataTwo__titleOrange">Order</p>
                    <p className="selectMetrica__cards__dataTwo__parrafoWhite">It is a long established <br /> be distracted by the readable <br />
                    looking at its layout.</p>
                </div>
                <div className="selectMetrica__cards__dataTwo">
                    <img src="https://mibucketcl2023.s3.amazonaws.com/images/s2.png" alt="img" />
                    <p className="selectMetrica__cards__dataTwo__titleOrange">Shipping</p>
                    <p className="selectMetrica__cards__dataTwo__parrafoWhite">It is a long established <br /> be distracted by the readable <br />
                    looking at its layout.</p>
                </div>
                <div className="selectMetrica__cards__dataTwo">
                    <img src="https://mibucketcl2023.s3.amazonaws.com/images/s3.png" alt="img" />
                    <p className="selectMetrica__cards__dataTwo__titleOrange">Dellvered</p>
                    <p className="selectMetrica__cards__dataTwo__parrafoWhite">It is a long established <br /> be distracted by the readable <br />
                    looking at its layout.</p>
                </div>
            </div>
        </div>
    )
};

export default Services;