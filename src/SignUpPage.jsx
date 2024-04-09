import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
}
    from 'mdb-react-ui-kit';
const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        phoneNumber: '',
        profession: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        localStorage.setItem('userData', JSON.stringify(formData));
        setFormData({
            name: '',
            password: '',
            email: '',
            phoneNumber: '',
            profession: '',
        })
        navigate('/login');
        // Redirect to login page or do other actions after saving the data
    };

    return (
        <>
            <MDBContainer fluid>
                <MDBRow className='justify-content-center align-items-center vh-100'>
                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                    </MDBCol>
                    <MDBCol col='10' md='6'>
                        <MDBCard className='p-5 shadow-5'>
                            <MDBCardBody className='p-5 text-center'>

                                <h2 className="fw-bold mb-5">Sign up now</h2>

                                <MDBRow className='mb-4'>
                                    <MDBCol>
                                        <MDBInput label='Name' id='form1' type='text' name="name" onChange={handleChange} />
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className='mb-4'>
                                    <MDBCol>
                                        <MDBInput label='Email' id='form1' type='email' name="email" onChange={handleChange} />
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className='mb-4'>
                                    <MDBCol>
                                        <MDBInput label='Password' id='form1' type='password' name="password" onChange={handleChange} />
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className='mb-4'>
                                    <MDBCol>
                                        <MDBInput label='Mobile' id='form1' type='number' name="phoneNumber" onChange={handleChange} />
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow className='mb-4'>
                                    <MDBCol>
                                        <select className='form-select' name="profession" onChange={handleChange}>
                                            <option value="">Select Profession</option>
                                            <option value="developer">Developer</option>
                                            <option value="designer">Designer</option>
                                            <option value="manager">Manager</option>
                                        </select>
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                    <MDBCol>
                                        <MDBBtn className='w-100 mt-4' size='md' onClick={handleSubmit}>sign up</MDBBtn>
                                    </MDBCol>
                                </MDBRow>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default SignUpPage;
