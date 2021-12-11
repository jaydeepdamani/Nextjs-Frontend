import React from 'react';

const Card = ({homepage}) => {
    return(
        <>
            <div className="card-main">
                <h2>
                    {homepage.data.attributes.banner_title}
                </h2>
            </div>

        </>
    )
}

export default Card
