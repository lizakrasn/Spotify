import React, {useState} from 'react';
import './navigation.scss';

import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

interface NavigationProps {
  name: string
  children: React.ReactNode
}

export const Navigation = ({name, children}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const actionButton = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="navigation menu__navigation">
      <button
        type="button"
        className="navigation__button"
        onClick={() => actionButton()}
      >
        <p className="navigation__name">{name}</p>
        {isOpen ? <IoIosArrowUp size={15}/> : <IoIosArrowDown size={15}/>}
      </button>
      {isOpen
        ? (
            <div className="navigation__list-items">
              {children}
            </div>
          )
        : <></>}
    </div>

  )
}