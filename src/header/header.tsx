import React, { useState } from 'react';
import "./header.scss"
import {Search} from "./components/search/search"
import {User} from "./components/user/user"
import userData from "../data/user.json";

export const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState(userData)

  const onChangeInput = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className="header">
      <Search
        value={searchValue}
        onChange={onChangeInput}
      />
      <User
        user={user}
      />
    </div>
  )
}