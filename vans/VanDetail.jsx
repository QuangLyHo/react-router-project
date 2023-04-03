import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function VanDetail() {
    const param = useParams()

    const [vanDetail, setVanDetail] = useState(null)
    
    useEffect(() => {
        fetch(`/api/vans/${param.id}`)
            .then(res => res.json())
            .then(data => setVanDetail(data.vans))
    }, [])

    return (
        <div className="van-detail-container">
            {
                vanDetail ? (
                    <div className="van-detail-tile">
                        <img src={vanDetail.imageUrl} />
                        <p>{vanDetail.type}</p>
                        <h2>{vanDetail.name}</h2>
                        <p>{vanDetail.price}</p>
                        <p>{vanDetail.description}</p>
                    </div>
                ) : (
                    <h2 className="loading">...Loading</h2>
                )
            }
        </div>
    )
}