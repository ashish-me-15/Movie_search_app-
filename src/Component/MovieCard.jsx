import "../css/MovieCard.css"

function MovieCard({movie}) {

    function likeButton() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://m.media-amazon.com/images/M${movie.Poster}`} alt={movie.Title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={likeButton}>
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