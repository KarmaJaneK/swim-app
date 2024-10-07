// src/pages/Homepage.jsx


import WobbleCardDemo from "../components/childcomponents/Card.jsx";
import './Homepage.css'
import { Box } from "../components/ui/Box.jsx";
import { Header } from "../components/ui/Header.jsx";
function HomePage() {
    return (
        <div className="container">
            <Header className={"header"}/>
            <div className="wrapper">
            <Box classname={"absolute-box"}/>
                <div className={"content"}>
            <WobbleCardDemo className={"cards"}/>
                </div>
            </div>

        </div>
    );
}

export default HomePage;