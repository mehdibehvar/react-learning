// src/Loading.js
import React from 'react';
import '../../styles/Loading.css';

const Loading = ({ fullPage }) => {
    return (
        <div className={fullPage ? 'loading full-page' : 'loading'}>
            <div className="spinner"></div>
        </div>
    );
};

export default Loading;
