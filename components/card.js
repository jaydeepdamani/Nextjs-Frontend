import React, {useEffect, useState} from 'react'

import API from '../utils/api';

const Card = () => {
    const [homepage,setHomepage] = useState(null);

    useEffect(() => {
        API.get("api/homepage")
            .then(res => setHomepage(res.data.data))
            .catch(e => console.log(e))
    }, [])


    return(
        <>
            <div className="card-main">
                <h2>
                    {homepage?.attributes.title}
                </h2>
            </div>

        </>
    )
}

export default Card
