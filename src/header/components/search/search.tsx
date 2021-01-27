import React from 'react';
import "./search.scss";

interface SearchProps {
  value: string;
  onChange: (value: string) => void
}

export const Search = ({value, onChange} : SearchProps) => {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="search"
      type="text"
      placeholder="Search"
    />
  )
}
