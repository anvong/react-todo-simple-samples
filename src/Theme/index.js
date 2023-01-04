import { createContext, useState } from "react";
import Content from "./Content";
import './Theme.css'

// create a Context
export const ThemeContext = createContext()

function Theme() {
    const [theme, setTheme] = useState('dark')

    const handleSetTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: '0 20px' }}>
                <h3>Theme: useContext hook</h3>
                <button onClick={handleSetTheme}>Toggle theme </button>
                <Content />
            </div>
        </ThemeContext.Provider>
    )
}

export default Theme