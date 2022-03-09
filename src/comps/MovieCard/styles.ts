import {Box, Card,Stack,styled, Typography} from '@mui/material'
import { Star } from '@mui/icons-material'

export const StyledRoot = styled(Card)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        position: `absolute`,
        top: `0`,
        left: `0`,
        right: `0`,
        bottom: `0`,
        margin: `auto`,
        width: `384px`,
        height: `576px`,
        borderRadius: `16px`,
    },
    position: "relative",
    width:`100%`,
    height: `100%`,
}));

export const StyledImage = styled(`img`)(({theme})=>({
    position: `absolute`,
    width: `auto`,
    height: `100%`,
    zIndex: `1`,
}))

export const StyledWrapper = styled(Stack)(({theme})=>({
    height: "100%",
    position: `relative`,
    paddingBottom: theme.spacing(8),
}))

export const StyledButtonsWrapper = styled(Stack)(()=> ({
    marginLeft: "auto", 
    marginRight: "auto",
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
    bottom: 0,
    height: `100%`,
    background: `linear-gradient(0deg, rgba(0,0,0,1), rgba(0,0,0,0))`,
    zIndex: `10`,
}))
