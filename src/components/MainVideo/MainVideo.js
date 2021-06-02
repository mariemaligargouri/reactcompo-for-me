import React from "react";

const MainVideo = () => {
  return (
    <div className="mx-5 mt-5">
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/oYspSD04HJE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainVideo;
