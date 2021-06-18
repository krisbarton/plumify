import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Track from './track';

const TrackList = () => {

    const searchResults = useSelector((state) => state.search.searchResults);
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const { data, total } = searchResults;

    return (
        <section>
            <h2>Search results for: { searchTerm }. </h2>
            <h3>{ total } songs found.</h3>
            <ul>
                {Object.keys(data).map( (key, index) => {
                        const { id } = data[key];
                        return (
                            <Track data={data[key]} id={id} key={uuidv4()}  />
                        )
                })}
            </ul>
        </section>
    )

}

export default TrackList;