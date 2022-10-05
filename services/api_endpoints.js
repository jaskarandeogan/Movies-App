import apiHandler from "./api"

// get movies data from api
export const getMovies = async (category) => {
    try {
        const response = await apiHandler({
            url: `movie/${category}`,
            method: 'GET',
        })
        // console.log('response', response)
        return response?.results
    } catch (error) {
        console.log('error', error)
        return error
    }
}

// get individual movie data from api

export const getMovieById = async (id) => {
    try {
        const response = await apiHandler({
            url: `movie/${id}`,
            method: 'GET',
        })
        // console.log('response', response)
        return response
    } catch (error) {
        console.log('error', error)
        return error
    }
}

export const getTVById = async (id) => {
    try {
        const response = await apiHandler({
            url: `tv/${id}`,
            method: 'GET',
        })
        // console.log('response', response)
        return response
    } catch (error) {
        console.log('error', error)
        return error
    }
}

// get search apis data from api

export const seacrhGetShowing = async (search, type) => {
    try {
        const response = await apiHandler({
            url: `search/${type}`,
            method: 'GET',
            query: search
        })
        // console.log('response', response)
        return response?.results
    } catch (error) {
        console.log('api error', error)
        return error
    }
}

// get Tv Swows data from api

export const getTvShows = async (category) => {
    try {
        const response = await apiHandler({
            url: `tv/${category}`,
            method: 'GET',
        })
        // console.log('response', response)
        return response?.results
    } catch (error) {
        console.log('error', error)
        return error
    }
}


