import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
    return (
        <header>
            <Link to="/">Моментальная пицца Co.</Link>
            <SearchOrder />
            <p>Dmitry</p>
        </header>
    );
}

export default Header;
