import React from "react";
import { Link, NavLink} from 'react-router-dom'

export default function Header() {
    const activeStyle = {
        textDecoration: 'underline',
        color: 'red',
        fontWeight: 'bold'
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <NavLink
                        to="/about"
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                            About
                    </NavLink>
                    <NavLink
                        to="/vans"
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                            Vans
                    </NavLink>
                </nav>
        </header>
    )
}