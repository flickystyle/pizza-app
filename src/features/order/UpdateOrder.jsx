import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { getOrder, updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ _, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
