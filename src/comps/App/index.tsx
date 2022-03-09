//Dependencies scoped imports
import React from 'react'
import { ThemeProvider } from '@mui/material/styles';

// Project scoped imports
import {theme} from '../../theme'
import { useMovies } from '../../utils/useMovies'
import Carousel from '../Carousel'

const App = () => {
    const movies = useMovies();

    return (
        <ThemeProvider theme={theme}>
            <Carousel {...movies} />
        </ThemeProvider>)
}

export default App 