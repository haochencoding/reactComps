import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const finalClassNames = twMerge(
    classNames('boder rounded p-3 shadow bg-white w-full', className)
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
