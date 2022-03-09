import { Box, styled } from '@mui/material'


export const StyledRoot = styled(Box)(({theme}) => ({
    width:`100vw`,
    height: `100vh`,
    position: "relative",
    overflow: "hidden",
}));

export const StyledBackground = styled(`img`)(({theme})=> ({
    [theme.breakpoints.down('sm')]:{
        display: `none`
    },
    position: `absolute`,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `110vw`,
    height: `auto`,
    WebkitFilter: `blur(16px)`,
    zIndex: '0',
}))