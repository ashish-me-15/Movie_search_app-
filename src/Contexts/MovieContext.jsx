import { useState, useEffect, useContext, createContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFav = localStorage.getItem("Favorites")

        if(storedFav) setFavorites(JSON.parse(storedFav))
    }, [])

    // this useeffect(below) will only run if the fa changes (add or remove)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    // Now there are 3 operations to perform
    // - one operation to add the fav
    // - one operation to remove the fav
    // - last operation to check if something is a fav

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites, addToFavorites, removeFromFavorites, isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>

}