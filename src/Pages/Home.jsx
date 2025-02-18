import MovieCard from "../Component/MovieCard"
import { useState } from "react"

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

const movies = [
    {id : 1, title : "john wick", release_date : "2014"},
    {id : 2, title : "harry potter", release_date : "2011"},
    {id : 3, title : "300", release_date : "2006"},

]

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