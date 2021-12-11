import React from 'react'
import Link from "next/link";
import {fetchAPI} from "../lib/api";

const PrivacyPolicy = ({policies}) => {

    return (
        <div className="container">
            {
                policies.data.map((itm, i) =>
                    <div key={itm.id}>
                        <h2>{itm.attributes.policy_title}</h2>
                        <p>{itm.attributes.policy_content}</p>
                    </div>
                )
            }
        </div>
    );
};

export default PrivacyPolicy;


export async function getStaticProps() {
    // Run API calls in parallel
    const [policies] = await Promise.all([
        fetchAPI("/policies"),

    ])

    return {
        props: {policies},
        revalidate: 1,
    }
}
