import MovieCard from "../Component/MovieCard"
import { useState, useEffect } from "react"
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../Services/api"

function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() => {

        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load...")
            }

            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()

    }, [])



const handleSearch = (e) => {

    e.preventDefault();

    alert(searchQuery)
    setSearchQuery("-------")

}

    return <div className="home">

        <form onSubmit={handleSearch} className="search-forms">
        <input type="text" placeholder="search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
        <button type="submit" className="search-button">Search</button>

        </form>
       



        <div className="movies-grid">

            {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />)}

        </div>
    </div>
}

export default Home