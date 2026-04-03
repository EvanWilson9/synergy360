import React from "react";

export default function Video() {
  return (
    <div className="video-container">
      <iframe
        className="youtube-vid"
        src="https://www.youtube.com/embed/C-qhwdetnVo?si=eRZQaWg7vmgsRy0C"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
