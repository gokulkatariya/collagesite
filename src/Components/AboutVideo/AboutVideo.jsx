/* eslint-disable react/prop-types */

import "./AboutVideo.css";
import video_play from "../../assets/collage_video.mp4";
import { useRef } from "react";

function AboutVideo({ videstate, setVideoState }) {
  const player = useRef();
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setVideoState(false);
    }
  };

  return (
    <div
      className={`about-video ${videstate ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video_play} autoPlay muted controls></video>
    </div>
  );
}

export default AboutVideo;
