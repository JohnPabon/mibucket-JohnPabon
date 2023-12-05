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
                    <img src="https://siempreauto.com/wp-content/uploads/sites/9/2020/11/Bugatti-Chiron.jpg?quality=80&strip=all" alt="img" />
                    <p className="selectMetrica__cards__data__title">Chicken Burger</p>
                    <p className="selectMetrica__cards__data__parrafo">Tasty Food</p>
                    <p className="selectMetrica__cards__data__price">$11.00</p>
                </div>

                <div className="selectMetrica__cards__data">
                    <img src="https://siempreauto.com/wp-content/uploads/sites/9/2020/11/Bugatti-Chiron.jpg?quality=80&strip=all" alt="img" />
                    <p className="selectMetrica__cards__data__title">Special Beef Burger</p>
                    <p className="selectMetrica__cards__data__parrafo">Tasty Food</p>
                    <p className="selectMetrica__cards__data__price">$11.00</p>
                </div>

                <div className="selectMetrica__cards__data">
                    <img src="https://siempreauto.com/wp-content/uploads/sites/9/2020/11/Bugatti-Chiron.jpg?quality=80&strip=all" alt="img" />
                    <p className="selectMetrica__cards__data__title">Chicken Fry Pack</p>
                    <p className="selectMetrica__cards__data__parrafo">Tasty Food</p>
                    <p className="selectMetrica__cards__data__price">$11.00</p>
                </div>
            </div>
        </div>
    )
};

export default FoodMenu;