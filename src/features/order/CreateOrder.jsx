import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );

const fakeCart = [
    {
        pizzaId: 12,
        name: 'Mediterranean',
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: 'Vegetale',
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: 'Spinach and Mushroom',
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
];

function CreateOrder() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    const formErrors = useActionData();
    // const [withPriority, setWithPriority] = useState(false);
    const cart = fakeCart;

    return (
        <div>
            <h2>Готовы сделать заказ? Давайте начнем!</h2>

            <Form method="POST">
                <div>
                    <label>Имя</label>
                    <input type="text" name="customer" required />
                </div>

                <div>
                    <label>Номер телефона</label>
                    <div>
                        <input type="tel" name="phone" required />
                    </div>
                    {formErrors?.phone && <p>{formErrors.phone}</p>}
                </div>

                <div>
                    <label>Адресс</label>
                    <div>
                        <input type="text" name="address" required />
                    </div>
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority">
                        Сделать заказ приоритетным?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <button disabled={isSubmitting}>
                        {isSubmitting
                            ? 'Заказ обрабатывается'
                            : 'Заказать сейчас'}
                    </button>
                </div>
            </Form>
        </div>
    );
}

async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === 'on',
    };

    const newOrder = await createOrder(order);
    const errors = {};
    if (!isValidPhone(order.phone))
        errors.phone =
            'Пожалуйста укажите верный телефон что бы мы могли связаться с вами :(';

    if (Object.keys(errors).length > 0) return errors;

    return redirect(`/order/${newOrder.id}`);
}
export { action };
export default CreateOrder;
