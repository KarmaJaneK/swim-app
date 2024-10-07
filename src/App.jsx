import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import WobbleCardDemo from './components/childcomponents/Card';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/wobble-card-demo" element={<WobbleCardDemo />} />

            </Routes>
        </Router>
    );
}

export default App;