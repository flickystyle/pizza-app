import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="py-3 px-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Please choose your pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
