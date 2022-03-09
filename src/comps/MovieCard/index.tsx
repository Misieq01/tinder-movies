//Dependencies scoped imports
import React from 'react'


// Project scoped imports

//Module scoped imports
import { StyledImage, StyledRoot, StyledShadowOverlap, StyledTitle, StyledRaiting, StyledBody, StyledHorizontalStack, StyledVerticalStack, StyledWrapper, StyledRaitingIcon } from './styles';
import { MovieCardComponentProps } from './types'


const MovieCard = ({ data }: MovieCardComponentProps) => {

    return <StyledRoot role="movie-card-root">
        <StyledShadowOverlap />
        <StyledImage role="movie-card-image" src={data.imageURL} />
        <StyledWrapper>
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
        </StyledWrapper>


    </StyledRoot>
}

export default MovieCard 