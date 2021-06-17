import axios from 'axios';

/**
     * @param query
     * @returns {Promise<AxiosResponse<T>>}
     */

const doSearch = (song) => {

    return axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=track:${song}`, {
        'headers': {
            'x-rapidapi-host': API_HOST,
            'x-rapidapi-key': API_KEY,
        }
    });

}

export default doSearch;