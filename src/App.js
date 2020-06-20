import React, { useState } from "react";

import "./App.css";

import Navbar from "./components/Navigation/NavBar/NavBar";
import Navbutton from "./components/Navigation/NavButton/NavButton";
import Home from "./components/Home/Home";
import About from "./components/About/About";
// import Projects from './components/Projects/Projects';
import BassCovers from "./components/BassCovers/BassCovers";

function App() {
    const [topDrawerOpen, setTopDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setTopDrawerOpen(!topDrawerOpen);
    };

    return (
        <div className="App">
            <Navbar />
            <Navbutton
                drawerClickHandler={drawerToggleClickHandler}
                show={topDrawerOpen}
            />

            <Home />
            <About />
            {/* <Projects/> */}
            <BassCovers />
        </div>
    );
}

export default App;
