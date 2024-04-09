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

                <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

                <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                    <MDBCardBody className='p-5 text-center'>

                        <h2 className="fw-bold mb-5">Sign up now</h2>

                        <MDBRow>
                            <MDBCol col='6'>
                                <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' name="name" onChange={handleChange} />
                            </MDBCol>
                        </MDBRow>

                        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' name="email" onChange={handleChange} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' name="password" onChange={handleChange} />
                        <MDBInput wrapperClass='mb-4' label='Mobile' id='form1' type='number' name="phoneNumber" onChange={handleChange} />

                        <select name="profession" onChange={handleChange}>
                            <option value="">Select Profession</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Manager</option>
                        </select>
                        <MDBBtn className='w-100 mt-4' size='md' onClick={handleSubmit}>sign up</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </>
        /*<div>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
            <select name="profession" onChange={handleChange}>
                <option value="">Select Profession</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>*/
    );
};

export default SignUpPage;
