import React from 'react';

const TrackTest = () => {

    const updateTime = (e) => {
        let output = document.getElementById("currentTime");
        let audio = document.getElementById("player");
        let range = document.getElementById("slider");
        output.innerHTML = (audio.currentTime / 60).toFixed(2);
        range.value = (audio.currentTime / 60).toFixed(2);
    }
    
    const setDuration = (e) => {
        console.log("metadata has loaded. Duration is " , (e.target.duration / 60).toFixed(2));
        let output = document.getElementById("duration");
        output.innerHTML = (e.target.duration / 60).toFixed(2);
    }

    const playAudio = () => {
        let audio = document.getElementById("player");
        audio.play();
    }

    const pauseAudio = () => {
        let audio = document.getElementById("player");
        audio.pause();
    }

    return (
        <>
            <audio 
                onTimeUpdate={(e) => {updateTime(e)}}
                onLoadedMetadata={(e) => {setDuration(e)}}
                id="player" 
                preload="metadata" 
                src="https://cdns-preview-e.dzcdn.net/stream/c-e7f8459d71b9fbf33e6989ab0ab180e2-4.mp3"></audio>
            <div id="currentTime">0.00</div>
            <div id="duration">0.00</div>
            <input type="range" min="0" max="0.51" step="0.01" id="slider" value="0" />
            <button onClick={(e) => {playAudio()}}>Play</button>
            <button onClick={(e) => {pauseAudio()}}>Pause</button>
        </>
    )

}

export default TrackTest;