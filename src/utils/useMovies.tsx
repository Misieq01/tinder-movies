import { useState, useEffect } from 'react';
import axios from 'axios';
import { IMovie } from '../types/types';

export const useMovies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.PUBLIC_URL}/database.json`);
                setMovies(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchData();
    }, []);

    return { movies, isLoading, error };
};
