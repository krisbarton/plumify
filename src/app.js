import React, { useState, useEffect } from 'react';

import Desktop from './components/views/desktop';
import Mobile from './components/views/mobile';

import './styles/main.scss';

const App = () => {

    const [width, setWidth] = useState('');

    const setWindowSize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        setWindowSize();
        window.addEventListener("resize", setWindowSize);
        return () => {
            window.removeEventListener("resize", setWindowSize);
        }
    }, [])

    let isMobile = (width <= 768);

    return (
        <main className="layout">
            <header><h1>Plumi<span className="primaryHighlight">fy</span></h1></header>
            {isMobile ? <Mobile /> : <Desktop />}
        </main >
    )
}

export default App;