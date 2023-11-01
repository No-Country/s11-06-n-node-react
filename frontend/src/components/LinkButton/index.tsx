import React from 'react'
// import {Button as NUXButton} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const LinkButton = ({ children, className = 'rounded-lg', href }) => {

    return (
        <Link to={href} className={`${className} flex justify-center items-center h-10 bg-primary rounded-3xl w-full text-white text-sm font-medium uppercase `} >
            {children}
        </Link>
    )
}

export default LinkButton;