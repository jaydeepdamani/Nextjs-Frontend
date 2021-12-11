import React, {useEffect, useState} from 'react'
import axios from 'axios'

const PrivacyPolicy = () => {

    const [policies,setPolicies] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:1337/api/policies").then(res => setPolicies(res.data.data))
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
