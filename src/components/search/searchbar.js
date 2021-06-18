import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import SearchIcon from '../../assets/icons/search.svg';

import {
    saveSearchResults,
    saveSearchTerm,
    setHasLoaded,
    setIsLoading,
    deleteSelectedTrack,
    setTrackView,
    setIsError
} from '../../redux/searchSlice';

const SearchBar = () => {

    const searchRef = useRef('');
    const dispatch = useDispatch();

    /**
     * @param query
     * @returns {Promise<AxiosResponse<T>>}
     */

    const doSearch = (e) => {

        e.preventDefault();

        dispatch(setIsLoading(true));
        dispatch(deleteSelectedTrack());
        dispatch(setTrackView(false));
        dispatch(setHasLoaded(false));

        const song = searchRef.current.value;
        dispatch(saveSearchTerm(song));

        axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=track:${song}`, {
            'headers': {
                'x-rapidapi-host': API_HOST,
                'x-rapidapi-key': API_KEY,
            }
        }).then((response) => {
            console.log("search response...", response);
            //response.data.error ? setSearch({ error: true, errorMessage: 'There has been an error' }) : '';
            response.data.error ? dispatch(setIsError(true)) :
                dispatch(saveSearchResults(response.data));
            dispatch(setIsLoading(false));
            dispatch(setHasLoaded(true));

        }).catch((error) => {
            console.error(error);
        });

    }

    return (
        <section role="search">
            <form action="#" method="get">
                <fieldset>
                    <legend>Search this website</legend>
                    <label htmlFor="searchbar">
                        <input ref={searchRef} type="search" name="searchbar" placeholder="Search by song name..." maxLength="200"
                            onKeyDown={(e) => { e.key === 'Enter' ? doSearch(e) : '' }} />
                        <a href="" onClick={(e) => { doSearch(e); }}>
                            <img src={SearchIcon} alt="Search Plumify for a song!" />
                        </a>
                    </label>
                </fieldset>
            </form>

        </section>
    )

}

export default SearchBar;