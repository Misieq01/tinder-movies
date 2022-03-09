import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import MovieCard from '../comps/MovieCard';
import App from '../comps/App/index'
import { renderHook } from '@testing-library/react-hooks';
import { useMovies } from '../utils/useMovies';

const mockedMovie01 = {
    "id": "1and3011",
    "imageURL": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    "title": "Inferno",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit dignissim ligula, in pharetra neque imperdiet quis. Vivamus volutpat vestibulum fringilla.",
    "rating": 5.3
  };
const mockedMovie02 = {
    "id": "2301abc",
    "imageURL": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    "title": "Star Wars: Episode VII - The Force Awakens",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit dignissim ligula, in pharetra neque imperdiet quis. Vivamus volutpat vestibulum fringilla.",
    "rating": 8.2
  };

const mockedMovies = [mockedMovie01, mockedMovie02, mockedMovie01];


const server = setupServer(
    rest.get(`${process.env.PUBLIC_URL}/database.json`, (req, res, ctx) => {
      return res(ctx.json(mockedMovies))
    }),
    rest.put(`/recommendations/:id/reject`, (req, res, ctx) => {
        return res()
    }),
    rest.put(`/recommendations/:id/accept`, (req, res, ctx) => {
        return res()
    }),
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  describe('MovieCard component', () => {
      test('loads and displays movie', async () => {
        render(<MovieCard data={mockedMovie01} />)
    
        // eslint-disable-next-line
        await waitFor(() => screen.getByRole('movie-card-root'))
      
        expect(screen.getByRole('movie-card-root')).toBeValid()
        expect(screen.getByRole('movie-card-title')).toContainHTML(mockedMovie01.title)
      })
  });

  describe("useMovies hook", () => {
      test("should return movies", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useMovies());

        expect(result.current.isLoading).toEqual(true);

        await waitForNextUpdate()

        expect(result.current.movies).toStrictEqual(mockedMovies);
        expect(result.current.isLoading).toEqual(false);
      });   
  })

  describe('App', () => {
      test('displays next movie', async () => {
        render(<App />);
    
        // Wait until the movies are loaded.
        await waitForElementToBeRemoved(() => screen.queryByRole('loading-indicator'));

        // Check if the first movie is displayed.
        expect(screen.getByRole('movie-card-title')).toContainHTML(mockedMovie01.title)
    
        fireEvent.click(screen.getByRole("button-reject"));
      
        expect(screen.getByRole('movie-card-root')).toBeValid()
        expect(screen.getByRole('movie-card-title')).not.toContainHTML(mockedMovie01.title)
        expect(screen.getByRole('movie-card-title')).toContainHTML(mockedMovie02.title)
      })

      test('displays list end', async () => {
        render(<App />);
    
        // Wait until the movies are loaded.
        await waitForElementToBeRemoved(() => screen.queryByRole('loading-indicator'));

        fireEvent.click(screen.getByRole("button-reject"));      
        fireEvent.click(screen.getByRole("button-reject"));  
        fireEvent.click(screen.getByRole("button-reject"));  

        expect(screen.getByRole('empty')).toBeValid()

      })
  })
