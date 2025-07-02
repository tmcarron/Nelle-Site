import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./DemoSlider.css";

function DemoSlider() {
  const splideOptions = {
    rewind: true,
    gap: "30%",
    autoplay: false,
    pauseOnHover: true,
    resetProgress: false,
    height: "400px",
  };

  return (
    <div className="DemoSlider">
      <Splide options={splideOptions} aria-label="My Favorite Images">
        <SplideSlide className="splideContainer">
          <iframe
            width="696"
            height="392"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="696"
            height="392"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="696"
            height="392"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default DemoSlider;
