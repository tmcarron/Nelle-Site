import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <div className="bubbleContainer">
        <h1>KreativGeniusCo.</h1>
      </div>
      <div className="bubbleContainer aboutContainer">
        <p>
          Hello, I'm Ja'Nelle Hall—a 23-year-old independent filmmaker based in
          Detroit. My journey in film began just a year ago when I enrolled in
          the Motion Picture Institute’s intensive film production program.
          Since then, my passion for storytelling through visual media has only
          grown stronger. As a filmmaker, I aim to capture real-life stories
          through a cinematic lens—bringing depth, authenticity, and emotion to
          the screen. I specialize in directing, cinematography, editing, and
          art direction, and I’m committed to creating work that resonates and
          reflects truth.
        </p>
      </div>

      <div className="bubbleContainer">
        <h2>Content</h2>
        <p>DYING CREATIVITY (Directing)</p>
        <iframe
          src="https://www.youtube.com/embed/tWkoEdjVWl4"
          title="DYING CREATIVITY"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p>An Ode 2 Self (Directing)</p>
        <iframe
          src="https://www.youtube.com/embed/ff3eNTIT2dQ"
          title="An Ode 2 Self"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p>WHEN HUNGER STRIKES (Directing)</p>
        <iframe
          src="https://www.youtube.com/embed/qf3lIXT70TM"
          title="WHEN HUNGER STRIKES"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p>
          ROOM OF PASSAGE (An Adventurer has an existential debate with a
          dragon) (Art Department)
        </p>
        <iframe
          src="https://www.youtube.com/embed/pA_akaUf7d8"
          title="ROOM OF PASSAGE (An Adventurer has an existential debate with a dragon)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bubbleContainer bottomElement">
        <h2>Contact</h2>
        <p>
          <a href="https://www.instagram.com/accounts/edit/">Instagram</a>
        </p>
        <p>Email: Janellehall30@gmail.com</p>
        <p>
          {" "}
          Phone: <a href="tel:(313)644-1947">(313)644-1947</a>
        </p>
      </div>
    </div>
  );
}

export default App;
