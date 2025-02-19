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



const handleSearch = async(e) => {

    e.preventDefault();
     
    if(!searchQuery.trim()) return     // if user is searching for smth then it won't be the empty string , make sure there are some words
    if (loading) return               // it won't allow us to search if we are already searching 

    setLoading(true);                  // we are currently loading the result
    try {
      
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults);
        setError(null)


    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")

    } finally {

        setLoading(false)

    }


}

    return <div className="home">

        <form onSubmit={handleSearch} className="search-forms">
        <input type="text" placeholder="search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
        <button type="submit" className="search-button">Search</button>

        </form>

        {error && <div className="error-message">{error}</div>}


       

       {loading ? (
        <div className="loading">Loading...</div>
       ) : (
        <div className="movies-grid">

            {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />)}

        </div>
       )}

        
    </div>
}

export default Home