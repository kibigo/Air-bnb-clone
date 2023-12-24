import React from "react";

import star from "../Images/red-star-1.svg"

function Card ({data}){

    return(
        <div className="card">
            
            {data.map((item) => (
                <div key={item.id} className="card-item">

                    {item.openSpots == 0 && (
                     <div className="card-badge">Sold out</div>
                    )}
                    <img 
                        className="card-image"
                        src={item.coverImg}
                    />
                    <div className="card-stats">
                        <img 
                            className="card-star"
                            src={star}
                        />
                        <span>{item.stats.rating}</span>
                        <span className="gray">{item.stats.reviewCount}</span>
                        <span className="gray">{item.location}</span>
                    
                    </div>
                    <h2 className="card-title">{item.title}</h2>
                    <p> <span className="bold"> From $ {item.price}</span>/ person</p>
        
                    </div>
            ))}

        </div>
    )
}

export default Card