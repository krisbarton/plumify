import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { saveSelectedTrack, setTrackView } from '../../redux/searchSlice';

const Track = ({data, id, artist}) => {

    const dispatch = useDispatch();

    const selectTrack = () => {
        dispatch(saveSelectedTrack(data))
        dispatch(setTrackView(true))
    }

    return (
        <li onClick={(e) => {selectTrack()}} key={id}>
            <strong>{data.title}</strong> <br />
            by {data.artist.name}
        </li>
    )

}

export default Track;