import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import API from '../utils/api';

const Nav = () => {

    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        API.get("api/headers")
            .then(res => setHeaders(res.data.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="container-fluid header-main">
            <div className="col-12 d-flex align-items-center justify-content-between p-3">
                <div className="d-inline-block">
                    <Link href="/">
                        <a className="logo text-primary">Jamstack App</a>
                    </Link>
                </div>
                <div className="d-inline-block">
                    <ul className="list-unstyled header-items m-0">
                        {
                            headers.map((itm, i) =>
                                <div key={itm.id}>
                                    <Link href={"/contact-us"}>
                                        <a className="d-inline-block me-3 me-md-5">{itm.attributes.btn_contact_us_link}</a>
                                    </Link>
                                    <Link href={"/privacy-policy"}>
                                        <a className="d-inline-block">{itm.attributes.btn_privacy_link}</a>
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
