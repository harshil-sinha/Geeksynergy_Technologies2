import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
} from 'mdb-react-ui-kit';

const LoginPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData.name === name && userData.password === password) {
            // Redirect to the Dashboard component
            navigate('/dashboard');
            setInvalidCredentials(false);
        } else {
            setInvalidCredentials(true);
            Swal.fire({
                icon: 'error',
                title: 'Invalid Credentials',
                text: 'Please check your name and password',
            });
        }
    };

    return (
        <>
            <MDBContainer fluid className="p-3 my-5">
                <MDBRow>
                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid image-animation" alt="Phone image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>
                        <h1 className="lead fw-normal mb-0 me-3 text-center mb-3">Login</h1>
                        <MDBInput wrapperClass='mb-4' label='Enter Name' id='formControlLg' type='text' size="lg" onChange={(e) => setName(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
                        <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleSubmit}>Login</MDBBtn>
                            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account?<Link to="/signup" className="link-danger"> Register</Link></p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default LoginPage;
