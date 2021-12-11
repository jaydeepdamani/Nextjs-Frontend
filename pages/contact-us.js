import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us</h1>
        </div>
    );
};

export default ContactUs;

export async function getStaticProps({preview = false}) {
    return {props: {}}
}
