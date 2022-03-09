import { ButtonBaseProps } from '@mui/material'
import {TActionType} from '../../types/types'

export interface ButtonComponentProps extends ButtonBaseProps {
    actionType: TActionType,
    nextMovieProposition: (actionType: TActionType) => void
}

