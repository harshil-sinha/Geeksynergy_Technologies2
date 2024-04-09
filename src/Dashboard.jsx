import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file for additional styling
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [movieData, setMovieData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData.name && userData.password) {
            setIsLoggedIn(true);
            // Fetch data if logged in
            fetch('https://hoblist.com/api/movieList', {
                method: 'POST',
                body: JSON.stringify({
                    category: 'movies',
                    language: 'kannada',
                    genre: 'all',
                    sort: 'voting',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => setMovieData(data.result))
                .catch((error) => console.error('Error:', error));
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Redirect to login or perform other actions after logout
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            {isLoggedIn ? (
                <>
                    <button onClick={handleLogout} className="logout-button mb-3">Logout</button>
                    <MDBContainer className='text-center' fluid>
                        {movieData.map((movie, index) => (
                            <MDBRow key={index} className="movie-row">
                                <MDBCol lg="3" md="6" size="3" className="vote-column">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                                    <p>{movie.totalVoted}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                                    <p>Votes</p>
                                </MDBCol>
                                <MDBCol lg="3" md="6" className="image-column">
                                    <MDBCard style={{ width: '10rem' }}>
                                        <MDBCardImage src={movie.poster} alt={movie.title} position='top' />
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol lg="6" className="detail-column">
                                    <MDBCard>
                                        <MDBCardBody>
                                            <h2>{movie.title}</h2>
                                            <p>Genre: {movie.genre}</p>
                                            <p>Director: {movie.director}</p>
                                            <p>Stars: {movie.stars}</p>
                                            <p>Duration: {movie.mins} mins</p>
                                            <p>Language: {movie.language}</p>
                                            <p>Release Date: {new Date(movie.releasedDate * 1000).toLocaleDateString()}</p>
                                            <p>Views: {movie.pageViews}</p>
                                            <p>Votes: {movie.totalVoted} People</p>
                                            <p>Description: {movie.description}</p>
                                            <MDBCardText>{movie.description}</MDBCardText>
                                            <MDBBtn>Watch Trailer</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        ))}
                    </MDBContainer>
                </>
            ) : (
                <LoginPage />
            )}
        </div>
    );
};

export default Dashboard;
