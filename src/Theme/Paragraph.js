import { useContext } from 'react'
import { ThemeContext } from './index'

function Paragraph() {
    const theme = useContext(ThemeContext)
    console.log('Paragraph theme ', theme)
    return (
        <p className={theme}>
            Context provides a way to pass through the component tree without having to pass props down manually at every level
        </p>
    )
}

export default Paragraph