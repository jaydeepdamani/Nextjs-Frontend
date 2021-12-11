/*import axios from 'axios';*/

export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"}${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path)
    const response = await fetch(requestUrl)
    const data = await response.json()

    return data
}

/*

const fetchFromCMS = async (path) => {
    const url = `http://localhost:1337/api/${path}`;
    const res = await axios.get(url);
    return res.data;
};

export default fetchFromCMS;*/
