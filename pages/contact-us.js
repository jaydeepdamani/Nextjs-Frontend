import React from 'react';

import API from '../utils/api';

const ContactUs = () => {

    const [state, setState] = useState({
        name: "",
        email: ""
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        e.preventDefault()
        const {id, value} = e.target
        setError(prevState => ({
            ...prevState,
            [id]: ''
        }))

        setState(prevState => ({
            ...prevState,
            [id]: value
        }))

    }

    const handleSubmit = () => {
        /*const {errors, isValid} = validateLogin(state)*/

        if (true) {
            API.post('api/contact-uses', {
                name: state.name,
                email: state.email
            })
                .then(res => {
                    window.alert("Thank You")
                    console.log(res)
                })
                .catch(e => console.log(e))
        } else {
            /*setError(errors)*/
        }
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text"
                           className="form-control"
                           id="name"
                           value={state.name}
                           onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ContactUs;

export async function getStaticProps({preview = false}) {
    return {props: {}}
}
