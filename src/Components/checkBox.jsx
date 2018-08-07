import React, { Component } from 'react';

const CheckBox = ({text,click}) =>(
    <div>
    <br/>
    <input type="checkbox" onClick={click}></input>
    {text}
    </div>
);

export default CheckBox;