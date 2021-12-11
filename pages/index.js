import React from "react"
import Layout from "../components/layout"
import {fetchAPI} from "../lib/api"
import Card from "../components/card";
import PrivacyPolicy from "./privacy-policy";

const Home = ({headers, homepage, policies}) => {

    return (
        <>
            <Layout headers={headers}>
                <Card homepage={homepage}/>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [headers, homepage, policies] = await Promise.all([
        fetchAPI("/headers"),
        fetchAPI("/homepage"),
        fetchAPI("/policies"),

    ])

    return {
        props: {headers, homepage, policies},
        revalidate: 1,
    }
}

export default Home
