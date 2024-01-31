import React, { useEffect, useRef, useState } from "react";
import "../styles/music_player.css";
import data from "../data.json"
function MusicPLayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef=useRef(null)
  const playlist = data.music;
  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
      const audio = audioRef.current;
      audio.addEventListener('ended', playEnded);
      audio.addEventListener('timeupdate', updateProgress);
      return () => {
          audio.removeEventListener('ended', playEnded);
          audio.removeEventListener('timeupdate', updateProgress);
      };
  }, [currentSongIndex]);

  const play = () => {
      const audio =  audioRef.current
      audio.play();
      setIsPlaying(true);
  };

  const pause = () => {
      const audio =  audioRef.current
      audio.pause();
      setIsPlaying(false);
  };

  const skipForward = () => {
      const audio =  audioRef.current
      audio.currentTime += 15;
  };

  const skipBackward = () => {
      const audio =  audioRef.current
      audio.currentTime -= 15;
  };

  const playNextSong = () => {
  };
  const playEnded=()=>{
    pause()
  }
  const playPreviousSong = () => {
   
};

  const updateProgress = () => {
      const audio =  audioRef.current
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
  };

  const handleTimeChange = (e) => {
      const audio =  audioRef.current
      audio.currentTime = e.target.value;
      setCurrentTime(audio.currentTime);
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

  return (
    <div className="music_player">
      <div className="header">
        <img height={24} width={24} alt="Down" src="images/down.png" />
        <img height={24} width={24} alt="Share" src="images/share.png" />
      </div>
      <div className="music_layout">
        <img alt="Current Music" src="images/music_image.png" />
        <h1>Fundamentals of Product Description</h1>
        <p>Chapter 2 - What is Product Design?</p>
        <button>View Chapter Notes</button>
        <button>Attempt Quiz</button>
      </div>

      <div>
                <input
                    type="range"
                    value={currentTime}
                    max={duration || 0}
                    onChange={handleTimeChange}
                     className="range"
                />
                <div className="times">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>

                </div>
            </div>
            <audio ref={audioRef}  src={currentSong.url} />

      <div className="operators">
        <img alt="Prev" src="images/prev_music.png"  onClick={playPreviousSong}/>
        <div
          style={{
            backgroundImage: `url('/images/backward15.png')`,
            backgroundSize: "32px 32px",
            backgroundPosition: "center",
          }}
          onClick={skipBackward}
        >
          {/* <span>15</span> */}
        </div>
        {isPlaying?<img src="/images/playingframe.png" className="play_pause" alt="play/pause" onClick={isPlaying ? pause : play}/>:<button className="play_pause_button" onClick={isPlaying ? pause : play}>Play</button>}
        <div
          style={{
            backgroundImage: `url('images/forward15.png')`,
            backgroundSize: "32px 32px",
            backgroundPosition: "center",
          }}
          onClick={skipForward}
        >
          <span>15</span>
        </div>
        <img alt="Next" src="images/next_music.png" onClick={playNextSong} />
      </div>
    </div>
  );
}

export default MusicPLayer;
