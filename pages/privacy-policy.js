import React, {useEffect, useState} from 'react'

import API from '../utils/api';

const PrivacyPolicy = () => {

    const [policies,setPolicies] = useState([]);


    useEffect(() => {
        API.get("api/policies")
            .then(res => setPolicies(res.data.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="container">
            {
                policies.map((itm, i) =>
                    <div key={itm.id}>
                        <h2>{itm.attributes.policy_title}</h2>
                        <p>{itm.attributes.policy_content}</p>
                    </div>
                )
            }
            <h1>ABsabsdkj</h1>
        </div>
    );
};

export default PrivacyPolicy;
