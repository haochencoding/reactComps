import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    const cleanUp = () => {
      document.removeEventListener('click', handler);
    };

    return cleanUp;
  }, []);

  const handleClick = () => {
    setMenuOpen((currentMenuOpen) => !currentMenuOpen);
  };

  const handleOptionClick = (option) => {
    setMenuOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => {
          handleOptionClick(option);
        }}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {menuOpen && (
        <Panel className="absolute top-full">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
