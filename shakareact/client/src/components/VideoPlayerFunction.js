import React, { useEffect, useRef } from "react";

export default function VideoPlayer(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    const { sources, ...options } = props;
    window.videojs(videoRef.current, options, function () {
      window.player = this;
      this.updateSrc(sources);
    });
    return () => {
      window.player && window.player.dispose();
    };
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ borderRadius: 10, overflow: "hidden" }}>
        <video ref={videoRef} className="video-js vjs-default-skin"></video>
      </div>
    </div>
  );
}
