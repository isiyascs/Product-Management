import React, { Component } from 'react';
import data from "../Datas/data";
import ProductDisplay from "./productDisplay";


const ProductList = ({value}) => {
    let arr1 = [];
    let arr2=[];
    let data1=[];
    
    let i;
    for(i=0;i<data.length;i++) {
        if(data[i].inStock==true) {
            arr1.push(data[i]);
        }
    }
    if(value==true){
        data1=data;
    }
    else{
        data1=arr1;
    }
    return(
    <ul>{data1.map(d=>(<ProductDisplay {...d}/>))}</ul>
    );
}

export default ProductList;