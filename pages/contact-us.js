import React, {useState} from 'react';
import Layout from "../components/Layout";

import API from '../utils/api';
import {errorHandler} from "../utils/helper";
import Toast from "../utils/toastSweetAlert";
import Input from "../components/Input";
import Button from "../components/Button";
import validateContactUs from "../validations/contactUsValidation";

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
        const {errors, isValid} = validateContactUs(state)

        if (isValid) {
            API.post('api/contact-uses', {
                data: {
                    name: state.name,
                    email: state.email
                }
            })
                .then(res => {
                    Toast.fire({
                        icon: 'success',
                        title: "Thank you for contacting Jamstack",
                        background: '#191c27',
                        color: '#00d09c',
                    })
                    console.log(res)
                })
                .catch(e =>
                    errorHandler(e).then(r => r)
                )
        } else {
            setError(errors)
        }
    }

    return (
        <Layout>
            <section className="contact-us-main">
                <div className="container">
                    <div className="row justify-content-center p-3">
                        <div className="contact-us-form col-12 col-md-7 col-lg-5 p-4 p-md-5">
                            <h2 className="text-center text-primary">Contact Us</h2>
                            <form className="mt-5">
                                <div className="mb-3">
                                    <Input
                                        placeholder={"Enter your name"}
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={state.name}
                                        handleChange={handleChange}
                                    />
                                    <div className="mt-2 text-left text-danger d-block f-12">{error?.name}</div>
                                </div>
                                <div className="mb-3">
                                    <Input
                                        placeholder={"Enter your email"}
                                        type="email"
                                        id="email"
                                        value={state.email}
                                        handleChange={handleChange}
                                    />
                                    <div className="mt-2 text-left text-danger d-block f-12">{error?.email}</div>
                                </div>
                            </form>
                            <div className="text-center mt-5">
                                <Button handler={handleSubmit} text={"Submit"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default ContactUs;
