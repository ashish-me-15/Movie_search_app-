import "../css/MovieCard.css"
import { useMovieContext } from "../Contexts/MovieContext";

function MovieCard({movie}) {

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
            else addToFavorites(movie)
        
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://m.media-amazon.com/images/M${movie.Poster}`} alt={movie.Title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                ❤️
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Released?.split("-")[0]}</p>
        </div>
    </div>
    
}

export default MovieCard;