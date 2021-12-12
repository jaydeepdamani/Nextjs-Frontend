import React from 'react';

const Input = ({placeholder, type, id, value, handleChange}) => {

    return (
        <>
            <input className="c-input" placeholder={placeholder} type={type} id={id} value={value}
                   onChange={handleChange}/>
        </>
    );
};

export default Input;
