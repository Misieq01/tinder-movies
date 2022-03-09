//Dependencies scoped imports
import React from 'react'
import axios from 'axios'

// Project scoped imports
import Button from '../Button/index'

//Module scoped imports
import { TActionType } from '../../types/types'
import { StyledImage, StyledRoot, StyledShadowOverlap, StyledTitle, StyledRaiting, StyledButtonsWrapper, StyledBody, StyledHorizontalStack, StyledVerticalStack, StyledWrapper, StyledRaitingIcon } from './styles';
import { MovieCardComponentProps } from './types'


const MovieCard = ({ data, index, incrementIndex }: MovieCardComponentProps) => {

    const submitRecommendation = async (actionType: TActionType) => {
        try {
            await axios.put(`/recommendations/${data.id}/${actionType}`);
        } catch(err) {
            console.log(err);
        }
    };

    const nextMovieProposition = async (actionType: TActionType) => {
        await submitRecommendation(actionType);

        incrementIndex();
    }

    return <StyledRoot role="movie-card-root">
        <StyledShadowOverlap />
        <StyledImage role="movie-card-image" src={data.imageURL} />
        <StyledWrapper alignItems="center" justifyContent="flex-end" paddingX={4}>
            <StyledVerticalStack>
                <StyledHorizontalStack justifyContent='space-between'>
                    <StyledTitle role="movie-card-title">{data.title}</StyledTitle>
                    <StyledHorizontalStack alignSelf='flex-end' >
                        <StyledRaitingIcon />
                        <StyledRaiting role='movie-card-rating'>{data.rating}/10</StyledRaiting>
                    </StyledHorizontalStack>
                </StyledHorizontalStack>
                <StyledBody role="movie-card-summary">{data.summary}</StyledBody>

            </StyledVerticalStack>
            <StyledButtonsWrapper 
                direction="row" 
                alignItems="center" 
                justifyContent="center" 
                spacing={8} 
                marginTop={4} 
                role="carousel-button-wrapper">
                    <Button nextMovieProposition={nextMovieProposition} actionType='accept' />
                    <Button nextMovieProposition={nextMovieProposition} actionType='reject' />
            </StyledButtonsWrapper>
        </StyledWrapper>
    </StyledRoot>
}

export default MovieCard 