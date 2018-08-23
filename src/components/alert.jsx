import React from 'react';

//need to test
const Alert = ({ message, success }) => (
    <div className={`Alert${success ? " success ": ""}`}>
        {message}
    </div>
);

export default Alert;