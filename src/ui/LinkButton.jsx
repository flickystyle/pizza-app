import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classNames =
    'text-sm text-blue-500 hover:text-blue-800 hover:underline';

  if (to === '-1') {
    return (
      <button className={classNames} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={classNames}>
      {children}
    </Link>
  );
}

export default LinkButton;
