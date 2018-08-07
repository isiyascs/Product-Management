import React, { Component } from 'react';

const ProductDisplay = ({name,price,inStock,type}) =>{
    
    // const arr = [];

    // if(inStock===true){
    //     let object = {n:name,p:price}
    //     arr.push(object);
    // }
    return(   
    <React.Fragment>
        <label>{name}</label>
        <label>{price}</label><br/>
    </React.Fragment>
 );
};

export default ProductDisplay;