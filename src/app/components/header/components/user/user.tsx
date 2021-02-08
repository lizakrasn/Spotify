import React, {useState} from 'react';
import UserModel from '../../../../../data/user';
import "./user.scss";

import { FaBell } from 'react-icons/fa';
import { FaInbox } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

interface UserProps {
  user: UserModel;
}

export const User = ({user} : UserProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const actionsButton = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="user">
      <div className="user__notifications">
        <FaBell size={17}/>
      </div>
      <div className="user__inbox">
        <FaInbox size={17}/>
      </div>
      <div className="user__info">
        <img
          src={user.image}
          alt="user"
          className="user__photo"
        />
        <p className="user__name">{`${user.name} ${user.surname}`}</p>
      </div>
      <div className="user__actions">
        <button
          className="user__button"
          type="button"
          onClick={() => actionsButton()}
        >
          <IoIosArrowDown size={25}/>
        </button>
        {
          isOpen
            ? (
              <ul className="user__actions-list">
                <li className="user__action">
                  <a className="user__action-item" href="#">Private session</a>
                </li>
                <li className="user__action">
                  <a className="user__action-item" href="#">Account</a>
                </li>
                <li className="user__action">
                  <a className="user__action-item" href="#">Settings</a>
                </li>
                <li className="user__action">
                  <a className="user__action-item" href="#">Log Out</a>
                </li>
              </ul>
            )
            : <></>
        }
      </div>
    </div>
  )
}