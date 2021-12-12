import React, {useEffect, useState} from 'react';

import API from '../utils/api';
import Layout from "../components/Layout";

const PrivacyPolicy = () => {

    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        API.get("api/policies")
            .then(res => setPolicies(res.data.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <Layout>
            <section className="privacy-policy-main">
                <div className="container">
                    {
                        policies.map((itm, i) =>
                            <div key={itm.id}>
                                <h2 className="text-primary mt-4">{itm.attributes.policy_title}</h2>
                                <p className="text-white f-14 mt-4">{itm.attributes.policy_content}</p>
                            </div>
                        )
                    }
                </div>
            </section>
        </Layout>
    );
};

export default PrivacyPolicy;
