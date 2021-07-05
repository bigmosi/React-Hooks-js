import React, { useEffect, useState } from 'react';


const [checkBoxValue,setCheckBoxValue] = useState(false);

useEffect(() => {
    console.log('in useEffect');
    return () => {
        console.log('in useEffect clean');
    }
},[checkBoxValue])


export default import('postcss').Syntax;