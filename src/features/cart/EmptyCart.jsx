import { Link } from 'react-router-dom';

function EmptyCart() {
    return (
        <div>
            <Link to="/menu">&larr; Назад в меню</Link>

            <p>
                Your cart is still empty. Please choose your pizzas :)
            </p>
        </div>
    );
}

export default EmptyCart;
