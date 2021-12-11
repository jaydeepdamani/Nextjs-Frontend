import React, {useEffect, useState} from 'react'
import axios from "axios";

const Card = () => {
    const [homepage,setHomepage] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:1337/api/homepage").then(res => setHomepage(res.data.data))
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
