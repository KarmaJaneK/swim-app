// src/pages/Homepage.jsx

import { Link } from 'react-router-dom';
import WobbleCardDemo from "../components/childcomponents/Card.jsx";
import './Homepage.css'
function HomePage() {
    return (
        <div className="container">
            <h1>Welcome to the Homepage</h1>
            <p>This is the homepage of your React application.</p>
            <WobbleCardDemo />
        </div>
    );
}

export default HomePage;