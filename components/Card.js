import React, {useEffect, useState} from 'react'
import Image from 'next/image';

import bannerImg from '../public/dummy-images/hero_2.jpg';

import API from '../utils/api';

const Card = () => {
    const [homepage, setHomepage] = useState(null);

    useEffect(() => {
        API.get("api/homepage")
            .then(res => setHomepage(res.data.data))
            .catch(e => console.log(e))
    }, [])


    return (
        <>
            <div className="card-main">
                <Image src={bannerImg} width={1900} height={1150}  alt="Picture of the author" layout="fill" />
                <h1 className="card-content">
                    {homepage?.attributes.title}
                </h1>
            </div>

        </>
    )
}

export default Card;
