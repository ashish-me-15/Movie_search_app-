import "../css/Favorites.css"
import { useMovieContext } from "../Contexts/MovieContext"
import MovieCard from "../Component/MovieCard"

function Favorites() {

    const {Favorites} = useMovieContext();

    if(Favorites) {

        return(

        <div className="favorites">

            <h2>Your Favorites</h2>
           
        <div className="movies-grid">

        {Favorites.map((movie) => <MovieCard movie={movie} key={movie.id} />)}

    </div>
    </div>
        )
    }


    return <div className="favorites-empty">
    <h2>No Favorite Movie Yet</h2>
    <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
}

export default Favorites