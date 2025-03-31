import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleDec() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  function handleInc() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button type="round" onClick={handleDec}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleInc}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
