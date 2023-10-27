import React from 'react'
// import {Button as NUXButton} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const LinkButton = ( {children, className='rounded-lg', href}) => {

    return (
            <button
                className={`${className}  h-14 bg-primary rounded-3xl w-full`}
            >
                <Link to={href} className='text-white text-sm font-medium uppercase'>{children}</Link>    
            </button>
    )
}

export default LinkButton;