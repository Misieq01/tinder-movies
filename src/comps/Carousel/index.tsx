//Dependencies scoped imports
import React,{useState} from 'react'
import { CircularProgress } from '@mui/material'

// Project scoped imports
import MovieCard from '../MovieCard/index'
import EmptyMovieCard from '../EmptyMovieCard/index'

//Module scoped imports
import { StyledRoot, StyledBackground } from './styles';
import { CarouselComponentProps } from './types'

export const Carousel = ({movies, isLoading, error} : CarouselComponentProps) => {
    const [index, setIndex] = useState(0)

    const incrementIndex = () => setIndex(i => i + 1);

    if(isLoading) return <CircularProgress role='loading-indicator' />;
    if(index >= movies.length) return <EmptyMovieCard />;

    return <StyledRoot role="carousel-root">
                <MovieCard index={index} incrementIndex={incrementIndex} data={movies[index]} />
                <StyledBackground src={movies[index].imageURL} />
        </StyledRoot>
}

export default Carousel 