import React from "react";

const Suggestions = () => {
  const urlList = [
    {
      src: "https://www.youtube.com/embed/Law7wfdg_ls?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
      title: `React router dom - Dev Ed`,
    },
    {
      src: "https://www.youtube.com/embed/vjf774RKrLc",
      title: `Rest Api — Dev Ed`,
    },
    {
      src: `https://www.youtube.com/embed/zQRrXTSkvfw?list=RDCMUClb90NQQcskPUGDIXsQEz5Q`,
      title: `Learn Node JS — Dev Ed`,
    },
    {
      src: "https://www.youtube.com/embed/CVpUuw9XSjY?list=RDCMUClb90NQQcskPUGDIXsQEz5Q",
      title: `Learn Redux — Dev ED`,
    },
  ];
  return (
    <div className="mt-5 col-md-4">
      {urlList.map((el, index) => (
        <div key={index}>
          <iframe 
            width="400"
            height="200"
            src={el.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
