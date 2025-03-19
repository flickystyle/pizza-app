import { Link } from 'react-router-dom';

function EmptyCart() {
    return (
        <div>
            <Link to="/menu">&larr; Назад в меню</Link>

            <p>
                Ваша корзина всё ещё пуста. Выберите пиццу, которую хотите
                заказать :)
            </p>
        </div>
    );
}

export default EmptyCart;
