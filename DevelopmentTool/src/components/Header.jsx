// Header.jsx
import React, { useState } from 'react';

const Header = ({ onThemeChange }) => {
    const [theme, setTheme] = useState('light');

    const handleThemeChange = (event) => {
        const newTheme = event.target.value;
        setTheme(newTheme);
        onThemeChange(newTheme);
    };

    return (
        <header style={{ padding: '10px', textAlign: 'center' }}>
            <h1>Dynamic Form</h1>
            <label htmlFor="theme-selector">Select Theme:</label>
            <select id="theme-selector" value={theme} onChange={handleThemeChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </header>
    );
};

export default Header;
