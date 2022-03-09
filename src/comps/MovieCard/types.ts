import { CardProps } from '@mui/material'
import { IMovie } from '../../types/types'

export interface MovieCardComponentProps extends CardProps {
    /**
    * Contains data that needs to be displayed in MovieCard Component.
    */
    data: IMovie
}

