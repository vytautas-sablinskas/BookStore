import React from 'react';
import './PageNotFound.sass';

function PageNotFound() : JSX.Element {
    return (
        <div className='page-not-found'>
            <img src='/404.png' className='not-found-image' alt='404'/>
            <h1>Page not found.</h1>
        </div>
    )
}

export default PageNotFound;