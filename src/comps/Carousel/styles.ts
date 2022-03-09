import { Box,styled,Stack } from '@mui/material'


export const StyledRoot = styled(Box)(({theme}) => ({
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
    width:`100vw`,
    height: `100vh`,
    display: `flex`,
    flexFlow: 'row nowrap',
    justifyContent: `center`,
    alignItems: `center`,

}));

export const StyledBackground = styled(`img`)(({theme})=> ({
    [theme.breakpoints.down('sm')]:{
        display: `none`
    },
    position: `absolute`,
    width: `110vw`,
    height: `auto`,
    WebkitFilter: `blur(16px)`,
    zIndex: '0',
}))

export const StyledWrapper = styled(Stack)(()=> ({
    display: `flex`,
    flexFlow: `row nowrap`,
    justifyContent: `space-around`,
    alignSelf: `flex-end`,
    marginBottom: `24px`,
    width: `60%`,
}))