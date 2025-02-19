const API_KEY = "ccbdc51fadmsh8abb0293aff93a0p1c3cc4jsn5b2101de453e";
const BASE_URL = "https://rapidapi.com"

export const getPopularMovies = async () => {

    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)

    const data = await response.json();

    return data.results

}

export const searchMovies = async (query) => {

    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)

    const data = await response.json();

    return data.results

}



