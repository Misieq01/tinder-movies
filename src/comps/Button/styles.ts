import { ButtonBase,styled, } from '@mui/material'
import { ButtonComponentProps } from './types';

import { Done } from '@mui/icons-material'
import { Close } from '@mui/icons-material'

export const StyledAcceptIcon = styled(Done)(()=>({
    color: '#92ff4f'
}));
export const StyledRejectIcon = styled(Close)(()=>({
    color: '#ff4f4f'
}));

export const StyledRoot = styled(ButtonBase)<Partial<ButtonComponentProps>>(({actionType}) => ({
    width: `64px`,
    minWidth: `48px`,
    height: `64px`,
    border: `2px solid ${actionType === 'accept' ? '#92ff4f' : '#ff4f4f'}`,
    borderRadius:'32px',
    zIndex: '15'
}));