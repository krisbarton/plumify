import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Track from './track';

const TrackList = () => {

    const searchResults = useSelector((state) => state.search.searchResults);
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const { data, total } = searchResults;

    return (
        <section className="tracklist">
            <h2 className="tracklist__searchTerm">
                Search results for: <span className="secondaryHighlight">{searchTerm}</span>. </h2>
            <h3 className="tracklist__songsFound"><span className="secondaryHighlight">{total}</span> songs found.</h3>
            <ul>
                {Object.keys(data).map((key, index) => {
                    const { id } = data[key];
                    return (
                        <Track data={data[key]} id={id} key={uuidv4()} />
                    )
                })}
            </ul>
        </section>
    )

}

export default TrackList;