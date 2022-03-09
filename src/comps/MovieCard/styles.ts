import {Box, Card,Stack,styled, Typography} from '@mui/material'
import { Star } from '@mui/icons-material'

export const StyledRoot = styled(Card)(({theme}) => ({

}));

export const StyledImage = styled(`img`)(({theme})=>({
    [theme.breakpoints.up('sm')]: {
        width: `100%`,
        height: `auto`,
        minHeight: `100%`,
    },
        position: `absolute`,
        width: `auto`,
        height: `100vh`,
        zIndex: `1`,

}))
export const StyledWrapper = styled(Box)(({theme})=>({
    [theme.breakpoints.up('sm')]: {
        width: `90%`,
        height: `60%`,
    },
    display: `flex`,
    flexFlow: 'row nowrap',
    justifyContent: `center`,
    alignItems: `center`,
    width: `80%`,
    height: `70%`,

}))
export const StyledTitle = styled(Typography)(()=>({

    color: `#e5e5e5`,
    zIndex: `15`,
    fontWeight: `bold`,
    fontSize: `24px`,
}))
export const StyledBody = styled(Typography)(()=>({
    color: `#e5e5e5`,
    zIndex: `15`,
    fontSize: `14px`,
}))
export const StyledRaiting = styled(Typography)(()=>({
    color: `#e5e5e5`,
    zIndex: `15`,
    marginLeft: `4px`,
    fontSize: `16px`,
}))
export const StyledRaitingIcon = styled(Star)(()=>({
    width: `18px`,
    color: `#e5e5e5`,
    zIndex: `15`,
}))
export const StyledHorizontalStack = styled(Stack)(()=>({
    display: `flex`,
    flexFlow: `row nowrap`,
    alignItems: `center`,
}))
export const StyledVerticalStack = styled(Stack)(()=>({
    display: `flex`,
    flexFlow: `column nowrap`,
    justifyContent: `center`,
    alignSelf: `flex-end`,
}))
export const StyledShadowOverlap = styled(Box)(({theme})=>({
    position: `absolute`,
    width: `100%`,
    height: `100%`,
    background: `linear-gradient(0deg, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 61%)`,
    zIndex: `10`,

}))
