import { useRef } from "react";
import "./App.css";
import videojs from "video.js";
import VideoPlayer from "./VideoPlayer";

function App() {
  const playerRef = useRef(null);
  const videoLink =
    "http://localhost:4000/uploads/courses/a140dee9-b128-4344-8dc0-7ddc75e0fa74/index.m3u8";

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
