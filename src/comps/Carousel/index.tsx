//Dependencies scoped imports
import React,{useState} from 'react'
import axios from 'axios'

// Project scoped imports
import Button from '../Button/index'
import MovieCard from '../MovieCard/index'
import EmptyMovieCard from '../EmptyMovieCard/index'

//Module scoped imports
import { StyledRoot,StyledBackground, StyledWrapper } from './styles';
import { TActionType } from '../../types/types'
import { CircularProgress } from '@mui/material'
import { CarouselComponentProps } from './types'

export const Carousel = ({movies, isLoading, error} : CarouselComponentProps) => {
    const [index, setIndex] = useState(0)

    const nextMovieProposition = async (actionType: TActionType) => {
        setIndex(index + 1)

        try {
            await axios.put(`/recommendations/${movies[index].id}/${actionType}`);
        } catch(err) {
            console.log(err);
        }
    }

    if(isLoading) return <CircularProgress role='loading-indicator' />;
    if(index >= movies.length) return <EmptyMovieCard />;

    return <StyledRoot role="carousel-root">
            <MovieCard data={movies[index]} />
            <StyledWrapper role="carousel-button-wrapper">
                <Button nextMovieProposition={nextMovieProposition} actionType='accept' />
                <Button nextMovieProposition={nextMovieProposition} actionType='reject' />
            </StyledWrapper>
            <StyledBackground src={movies[index].imageURL} />
        </StyledRoot>
}

export default Carousel 