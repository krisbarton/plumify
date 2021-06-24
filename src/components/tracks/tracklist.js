import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

import Track from './track';

const TrackList = () => {

    const searchResults = useSelector((state) => state.search.searchResults);
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const { data, total } = searchResults;

    useEffect(() => {
        document.title = `Plumify - ${total} songs found for '${searchTerm}'`;
    });

    return (
        <section className="tracklist fadeIn">
            <section className="slideIn">
                <header>
                    <h2 className="tracklist__searchTerm">
                        Search results for: <span className="secondaryHighlight">{searchTerm}</span>. </h2>
                    <h3 className="tracklist__songsFound"><span className="secondaryHighlight">{total}</span> songs found.</h3>
                </header>
                <ul>
                    {Object.keys(data).map((key, index) => {
                        const { id } = data[key];
                        return (
                            <Track data={data[key]} id={id} key={uuidv4()} />
                        )
                    })}
                </ul>
            </section>
        </section>
    )

}

export default TrackList;