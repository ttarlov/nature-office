import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'
 
const Error = inject('GlobalStore')(observer((props)  => {
    // GlobalStore.errorJoke()
    const joke = sessionStorage.getItem("joke")
    console.log(joke);
    

    return (
        <div className="error-container">
            <p>404 Error this needs work to look professional</p>
        <p>{joke}</p>

            <Link to='/' >
                <button className='back-to-login-btn'>Go Back to Login Page</button>
            </Link >

        </div>
    )
}))

export default Error