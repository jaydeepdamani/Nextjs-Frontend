import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import API from '../utils/api';
import Image from "next/image";
import logoImg from "../public/logo.png";

const Nav = () => {

    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        API.get("api/headers")
            .then(res => setHeaders(res.data.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="container-fluid header-main">
            <div className="col-12 d-flex align-items-center justify-content-between py-3 py-md-3">
                <div className="d-inline-block">
                    <Link href="/">
                        <a className="logo d-inline-flex align-items-center">
                            <Image src={logoImg} width={32} height={32} alt="Logo"/>
                            <span className="ms-2 text-white">
                            Jamstack App
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="d-inline-block">
                    <ul className="list-unstyled header-items m-0">
                        {
                            headers.map((itm, i) =>
                                <div key={itm.id}>
                                    <Link href={"/contact-us"}>
                                        <a className="d-inline-block me-2 me-md-5">{itm.attributes.btn_contact_us_link}</a>
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
