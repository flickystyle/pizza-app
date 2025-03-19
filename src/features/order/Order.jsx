// Test ID: IIDSAT
import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
} from '../../utils/helpers';

const order = {
    id: 'ABCDEF',
    customer: 'Dmitry',
    phone: '123456789',
    address: 'Perovo, Moscow , Russia',
    priority: true,
    estimatedDelivery: '2027-04-25T10:00:00',
    cart: [
        {
            pizzaId: 7,
            name: 'Napoli',
            quantity: 3,
            unitPrice: 16,
            totalPrice: 48,
        },
        {
            pizzaId: 5,
            name: 'Diavola',
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32,
        },
        {
            pizzaId: 3,
            name: 'Romana',
            quantity: 1,
            unitPrice: 15,
            totalPrice: 15,
        },
    ],
    position: '-9.000,38.000',
    orderPrice: 95,
    priorityPrice: 19,
};

function Order() {
    const {
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart,
    } = order;
    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div>
            <div>
                <h2>Статус</h2>

                <div>
                    {priority && <span>Priority</span>}
                    <span>{status} order</span>
                </div>
            </div>

            <div>
                <p>
                    {deliveryIn >= 0
                        ? `Всего минут осталось: ${calcMinutesLeft(
                              estimatedDelivery
                          )}😃`
                        : 'Заказ должен быть у вас'}
                </p>
                <p>
                    (Предполагаемое время доставки:{' '}
                    {formatDate(estimatedDelivery)})
                </p>
            </div>

            <div>
                <p>Цена: {formatCurrency(orderPrice)}</p>
                {priority && (
                    <p>Price priority: {formatCurrency(priorityPrice)}</p>
                )}
                <p>
                    Окончательная цена доставки:{' '}
                    {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>
        </div>
    );
}

export default Order;
