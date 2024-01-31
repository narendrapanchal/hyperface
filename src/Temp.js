import React, { useState, useEffect } from 'react';

const MusicPlayer = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const playlist = [
        {
            title: "Song Title 1",
            name: "Artist Name 1",
            image: "https://example.com/image1.jpg",
            url: "https://file-examples.com/storage/fed61549c865b2b5c9768b5/2017/11/file_example_MP3_700KB.mp3"
        },
        {
            title: "Song Title 2",
            name: "Artist Name 2",
            image: "https://example.com/image2.jpg",
            url: "https://file-examples.com/storage/fed61549c865b2b5c9768b5/2017/11/file_example_WAV_1MG.wav"
        }
    ];
    const currentSong = playlist[currentSongIndex];

    useEffect(() => {
        const audio = document.getElementById('audio');
        audio.addEventListener('ended', playNextSong);
        audio.addEventListener('timeupdate', updateProgress);
        return () => {
            audio.removeEventListener('ended', playNextSong);
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, [currentSongIndex]);

    const play = () => {
        const audio = document.getElementById('audio');
        audio.play();
        setIsPlaying(true);
    };

    const pause = () => {
        const audio = document.getElementById('audio');
        audio.pause();
        setIsPlaying(false);
    };

    const skipForward = () => {
        const audio = document.getElementById('audio');
        audio.currentTime += 15;
    };

    const skipBackward = () => {
        const audio = document.getElementById('audio');
        audio.currentTime -= 15;
    };

    const playNextSong = () => {
        setCurrentSongIndex((currentSongIndex + 1) % playlist.length);
    };

    const updateProgress = () => {
        const audio = document.getElementById('audio');
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
    };

    const handleTimeChange = (e) => {
        const audio = document.getElementById('audio');
        audio.currentTime = e.target.value;
        setCurrentTime(audio.currentTime);
    };

    return (
        <div>
            <div>
                <img src={currentSong.image} alt={currentSong.title} />
                <h2>{currentSong.title}</h2>
                <p>{currentSong.name}</p>
            </div>
            <div>
                <button onClick={isPlaying ? pause : play}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={skipBackward}>Skip Backward 15s</button>
                <button onClick={skipForward}>Skip Forward 15s</button>
            </div>
            <div>
                <input
                    type="range"
                    value={currentTime}
                    max={duration || 0}
                    onChange={handleTimeChange}
                />
            </div>
            <audio id="audio" src={currentSong.url} />
        </div>
    );
};

export default MusicPlayer;
