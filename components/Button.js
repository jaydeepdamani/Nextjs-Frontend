import React from 'react';

const Button = ({text, handler}) => {
    return (
        <>
         <button className="c-button" onClick={handler}>{text}</button>
        </>
    );
};

export default Button;
