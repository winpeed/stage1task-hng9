import "./App.css";
import { useState } from "react";

function App() {
  const [slackName, setSlackName] = useState("PraiseObende");
  return (
    <>
      <div className="share__button">
        <img src="Avatar share button.svg" alt="Share Button 1" />
      </div>

      <div className="share__button__two">
        <img src="Avatar share button_2.svg" alt="Share Button 2" />
      </div>
      <img
        src="profile.jpeg"
        alt="Profile Pic"
        id="profile__img"
        width={128}
        height={128}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "30% 10%",
        }}
      />
      <h1 id="twitter">PETERson OBIson</h1>
      <h2 id="slack">{slackName}</h2>

      <div className="btn__links">
        <a href="https://training.zuri.team/" id="btn__zuri">
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri">
          Zuri Team
        </a>
        <a href="https://training.zuri.team/" id="books">
          Zuri Books
        </a>
        <a href="https://training.zuri.team/" id="book__python">
          Python Books
        </a>
        <a href="https://training.zuri.team/" id="pitch">
          Background Check for Coders
        </a>
        <a href="https://training.zuri.team/" id="book__design">
          Design Books
        </a>
      </div>

      <div className="social__links">
        <a href="https://training.zuri.team/" id="btn__zuri">
          <img src="slack.png" alt="Slack Icon" width={25} height={25} />
        </a>

        <a href="https://training.zuri.team/" id="btn__zuri">
          <img src="github.svg" alt="Github Icon" />
        </a>
      </div>
      <footer>
        <span className="zuri__icon">
          <img src="Vector.svg" alt="Zuri Internship Logo" />
          <img src="dotVector.svg" alt="Dot Vector" className="dot__icon" />
        </span>

        <span className="footer__text">HNG Internship 9 Frontend Task</span>

        <span>
          <img src="I4G.svg" alt="Ingressive for Good" />
        </span>
      </footer>
    </>
  );
}

export default App;
