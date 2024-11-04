/**
 * @author Tan Dat
 * @document https://www.youtube.com/watch?app=desktop&v=wxp4R_avfYw
 */
import { useState, useRef, useEffect } from "react";

import { IoMdPause, IoMdPlay } from "react-icons/io";

import './AudioPlayer.scss'

const AudioPlayer = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);
    //Ham chon thoi gian nghe audio
    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    }

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    }
    // Ham choi nhac
    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    }

    // Ham chon dung nhac
    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    // Ham chon chay nhac hoac dung
    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    }

    //format time 
    function formatDuration(durationSeconds) {
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedDuration = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedDuration}`;
    }

    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        }
    }, [])

    return (
        <div className="audio-container">
            <input
                type="range"
                min='0'
                max={duration}
                value={currentTime}
                onChange={handleSeek}
            />

            <audio ref={audioRef} src={audioSrc} />
            <div className="track-duration">
                <p>{formatDuration(currentTime)}</p>
                <p>{formatDuration(duration)}</p>
            </div>

            {/* Pause button */}
            <button onClick={handlePlayPause}>
                {isPlaying ? <IoMdPause /> : <IoMdPlay style={{ marginLeft: '5px' }} />}
            </button>
        </div>
    )
}

export default AudioPlayer;