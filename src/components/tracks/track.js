import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { saveSelectedTrack, setTrackView } from '../../redux/searchSlice';

import Music from '../../assets/icons/music.svg';

const Track = ({ data, id, artist }) => {

    const dispatch = useDispatch();

    const selectTrack = () => {
        dispatch(saveSelectedTrack(data))
        dispatch(setTrackView(true))
    }

    return (
        <li onClick={(e) => { selectTrack() }} key={id}>
            <img src={Music} className="tracklist__icon" alt="A Music note track icon" />
            <p>{data.title}</p>
            <p>by {data.artist.name}</p>
        </li>
    )

}

export default Track;