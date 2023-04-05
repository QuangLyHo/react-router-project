import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    const activeStyles = {
        color: '#161616',
        fontWeight: 'bold',
        textDecoration: 'underline'
    }
    
    return (
        <>
            <nav>
                <NavLink 
                    end
                    to='/host'
                    style={({isActive}) => isActive ? activeStyles : null }
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to='/host/reviews'
                    style={({isActive}) => isActive ? activeStyles : null }
                >
                    Reviews
                </NavLink>
                <NavLink 
                    to='/host/income'
                    style={({isActive}) => isActive ? activeStyles : null }
                >
                    Income
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}