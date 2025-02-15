import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';
import { twMerge } from 'tailwind-merge';

function Link({ to, children, className, activateClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = twMerge(
    classNames(
      'text-blue-500',
      className,
      currentPath === to && activateClassName
    )
  );

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
