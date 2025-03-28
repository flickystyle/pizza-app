import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'inline-block rounded-full bg-yellow-400  font-semibold tracking-widetext-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-noneactive:bg-slate-400 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
