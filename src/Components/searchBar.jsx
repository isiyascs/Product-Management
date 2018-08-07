import React, { Component } from 'react';

const SearchBar = ({enter}) => {
    return(
    <input type="text" onKeyDown={enter}></input>
    );
};

export default SearchBar;