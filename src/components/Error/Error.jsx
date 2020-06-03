import React from 'react';
import { Link } from 'react-router-dom';
// import { getNorrisJoke } from '../../apiCalls'

const Error = ()  => {
    const joke = sessionStorage.getItem("joke")
    return (
        <div className="error-container">
        <p>{joke}</p>

            <Link to='/' >
                <button className='back-to-login-btn'>Go Back to Login Page</button>
            </Link >

        </div>
    )
}

export default Error
