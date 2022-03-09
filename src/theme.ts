import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({
    values: {
        xs: 0,
        sm: 480,
        md: 900,
        lg: 1200,
        xl: 1536, }})

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    components:{
        MuiCard:{
            styleOverrides:{
                root:{
                    width: `100vw`,
                    height: `100vh`,
                    display: `flex`,
                    flexFlow: 'row nowrap',
                    justifyContent: `center`,
                    alignItems: `center`,
                    background: 'none',
                    position: `absolute`,
                    borderRadius: `0`,

                    [breakpoints.up('sm')]: {
                        top: `0`,
                        left: `0`,
                        right: `0`,
                        bottom: `0`,
                        margin: `auto`,
                        width: `384px`,
                        height: `576px`,
                        boxShadow: `0 2px 4px rgba(0,0,0,0.16)`,
                        borderRadius: `16px`,
                    },
                }
            }
        },
    },

})