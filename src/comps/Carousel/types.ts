import { CardProps } from '@mui/material'
import { IMovie } from '../../types/types'

export interface CarouselComponentProps extends CardProps {
    /**
    * Contains data that needed in Carousel Component.
    */
   movies: IMovie[],
   /**
   * Informing about loading state
   */
    isLoading: boolean,
    error: any
}

