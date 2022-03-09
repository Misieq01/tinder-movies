import {Box, Card,Stack,styled, Typography} from '@mui/material'
import { FindInPageOutlined as MissingIcon } from '@mui/icons-material'

export const StyledRoot = styled(Card)(({theme}) => ({
    boxShadow: `none`,
    background: `#f5f5f5`,
    zIndex: `10`,
}));

export const StyledWrapper = styled(Box)(()=>({
    width: `80%`,
    height: `60%`,
    display: `flex`,
    flexFlow: 'row nowrap',
    justifyContent: `center`,
    alignItems: `center`,
}))
export const StyledVerticalStack = styled(Stack)(()=>({
    display: `flex`,
    flexFlow: `column nowrap`,
    justifyContent: `center`,
    alignItems: `center`
}))
export const StyledText = styled(Typography)(()=>({
    fontSize: `18px`,
    textAlign: 'center',
    fontWeight: `bold`
}))
export const StyledMissingIcon = styled(MissingIcon)(()=>({
    width: `24px`,
    background: `#e5e5e5`,
    borderRadius: `48px`,
    padding: `18px`,
    zIndex: `15`,
    marginBottom: `10px`
}))


