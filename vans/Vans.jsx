import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = useState([])
    
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanList = vans.map((van, index) => (
        <div key={index} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <h2>{van.name}</h2>
                <p>{van.price}/day</p>
                <p>{van.type}</p>
            </Link>
        </div>
    ))

    return (
        <div className="vans-container">
            <h2>Explore our van options</h2>
            
            <div className="vans-list">
                {vanList}
            </div>
        </div>
    )
}