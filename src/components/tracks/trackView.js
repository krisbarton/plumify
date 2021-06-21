import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTrackBackground, Range } from 'react-range';

import Volume from '../../assets/icons/volume.svg';
import Shuffle from '../../assets/icons/shuffle.svg';
import Repeat from '../../assets/icons/repeat.svg';
import Add from '../../assets/icons/add.svg';
import Next from '../../assets/icons/next.svg';
import Pause from '../../assets/icons/pause.svg';
import Previous from '../../assets/icons/previous.svg';


const STEP = 0.01;
const MIN = 0;

const TrackView = ({ rtl }) => {

    const selectedTrack = useSelector((state) => state.search.selectedTrack);
    const [values, setValues] = useState([0]);
    const duration = (selectedTrack.duration / 60).toFixed(2);
    const MAX = duration;

    return (
        <section className="trackview">
            <div className="trackview__label">Now Playing</div>
            <img src={selectedTrack.album.cover_medium}
                className="trackview__cover"
                alt={`${selectedTrack.album.title} by ${selectedTrack.artist.name} album cover`} />
            <h2 className="trackview__title">{selectedTrack.title}</h2>
            <h3 className="trackview__artist">{selectedTrack.artist.name}</h3>
            <div className="trackview__options">
                <img src={Volume} alt="Volume icon for audio player button" />
                <img src={Repeat} alt="Repeat icon for the audio player button" />
                <img src={Shuffle} alt="Shuffle icon for audio player button" />
                <img src={Add} alt="Add icon for audio player button" />
            </div>
            <div className="trackview__times">
                <span className="trackview__times--current">{values[0].toFixed(2)}</span>
                <span className="trackview__times--total">{duration}</span>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    width: '80%'
                }}
            >
                <Range
                    values={values}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    rtl={rtl}
                    onChange={(values) => setValues(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: '36px',
                                display: 'flex',
                                width: '100%'
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: '5px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values,
                                        colors: ['#3B32BC', '#CBCBCB'],
                                        min: MIN,
                                        max: MAX,
                                        rtl
                                    }),
                                    alignSelf: 'center'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '20px',
                                width: '20px',
                                borderRadius: '100%',
                                backgroundColor: '#3B32BC',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >

                        </div>
                    )}
                />
            </div>
            <div className="trackview__controls">
                <img src={Previous} alt="Previus icon for the audio player button" className="trackview__control" />
                <img src={Pause} alt="Pause icon from the audio player button" className="trackview__control trackview__control--highlight" />
                <img src={Next} alt="Next icon from the audio player button" className="trackview__control" />
            </div>
        </section>
    )

}

export default TrackView;