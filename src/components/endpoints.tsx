//endpoints were added here to make other components were they were called cleaner

export const links = [
    `https://api.themoviedb.org/4/list/1?api_key=${process.env.REACT_APP_API_Key}`,
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_Key}&query=`,
    `https://api.themoviedb.org/3/movie/`,
    `?api_key=${process.env.REACT_APP_API_Key}`
]