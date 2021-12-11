import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import API from '../utils/api';

const Nav = () => {

    const [headers, setHeaders] = useState([]);


    useEffect(() => {
        API.get("api/headers")
            .then(res => setHeaders(res.data.data))
            .catch(e => console.log(e))
    }, [])


    return (
        <div className="container-fluid bg-dark">
            <div className="col-12 d-flex align-items-center justify-content-between p-3">
                <div className="d-inline-block">
                    <h2 className="text-primary">Logo</h2>
                </div>
                <div className="d-inline-block">
                    <ul className="list-unstyled m-0">
                        {
                            headers.map((itm, i) =>
                                <div key={itm.id}>
                                    <Link href={"/contact-us"}>
                                        <a className="d-inline-block text-primary me-5">{itm.attributes.btn_contact_us_link}</a>
                                    </Link>
                                    <Link href={"/privacy-policy"}>
                                        <a className="d-inline-block text-primary">{itm.attributes.btn_privacy_link}</a>
                                    </Link>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
