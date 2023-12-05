import './../css/selectMetrica.css';

function FoodMenu(){
    return(
        <div className="selectMetrica">
            <div className="selectMetrica__info">
                <p className="selectMetrica__info__title">Food Menu</p>
                <p className="selectMetrica__info__parrafo">Fresh taste and grat price</p>
            </div>
            <div className="selectMetrica__cards">
                <div className="selectMetrica__cards__data">
                    <img src="https://mibucketcl2023.s3.amazonaws.com/images/food1.png" alt="img" />
                    <p className="selectMetrica__cards__data__title">Chicken Burger</p>
                    <p className="selectMetrica__cards__data__parrafo">Tasty Food</p>
                    <p className="selectMetrica__cards__data__price">$11.00</p>
                </div>

                <div className="selectMetrica__cards__data">
                    <img src="https://mibucketcl2023.s3.amazonaws.com/images/food2.png" alt="img" />
                    <p className="selectMetrica__cards__data__title">Special Beef Burger</p>
                    <p className="selectMetrica__cards__data__parrafo">Tasty Food</p>
                    <p className="selectMetrica__cards__data__price">$11.00</p>
                </div>

                <div className="selectMetrica__cards__data">
                    <img src="hthttps://mibucketcl2023.s3.amazonaws.com/images/food3.png" alt="img" />
                    <p className="selectMetrica__cards__data__title">Chicken Fry Pack</p>
                    <p className="selectMetrica__cards__data__parrafo">Tasty Food</p>
                    <p className="selectMetrica__cards__data__price">$11.00</p>
                </div>
            </div>
        </div>
    )
};

export default FoodMenu;