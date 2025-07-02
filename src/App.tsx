import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DemoSlider from "./DemoSlider";
function App() {
  return (
    <div className="App">
      <h1>Nelle Productions</h1>
      <p>
        Hello, I'm Nelle, a director, cinnematographer, and editor at your
        service.
      </p>
      <p>
        If you'd like to work with me, please email me at
        moneymaker@dollerz.cash
      </p>
      <div className="demoReelsContainer">
        <h2>Demo Reels</h2>
        <div className="reelsContainer">
          <DemoSlider />
        </div>
      </div>
    </div>
  );
}

export default App;
