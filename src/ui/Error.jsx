import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>Что-то пошло не так 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to={'-1'}>&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
