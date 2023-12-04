
import { Link } from 'react-router-dom';

function FullWebsite(){
    return(
        <div>
            <div>
                <h2>Full Website</h2>
                <p>Foods the Most precius thing</p>
                <Link to="/menu">Today's Menu</Link>
            </div>
            <div>
                <img src="" alt='img' />
            </div>
        </div>
    )
};

export default FullWebsite;