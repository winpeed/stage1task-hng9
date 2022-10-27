/* eslint-disable no-unused-vars */
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
        <a
          href="https://twitter.com/winpeed"
          id="btn__zuri"
          target="_blank"
          rel="noreferrer"
        >
          Twitter Link
        </a>
        <a
          href="https://training.zuri.team/"
          id="btn__zuri"
          target="_blank"
          rel="noreferrer"
        >
          Zuri Team
        </a>
        <a
          href="http://books.zuri.team/"
          id="books"
          target="_blank"
          rel="noreferrer"
        >
          Zuri Books
        </a>
        <a
          href={`https://books.zuri.team/python-for-beginners?ref_id=${slackName}`}
          id="book__python"
          target="_blank"
          rel="noreferrer"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team"
          id="pitch"
          target="_blank"
          rel="noreferrer"
        >
          Background Check for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          id="book__design"
          target="_blank"
          rel="noreferrer"
        >
          Design Books
        </a>
      </div>

      <div className="social__links">
        <a href="https://hng9.slack.com/" target="_blank" rel="noreferrer">
          <img src="slack.png" alt="Slack Icon" width={25} height={25} />
        </a>

        <a href="https://github.com/winpeed/" target="_blank" rel="noreferrer">
          <img src="github.svg" alt="Github Icon" />
        </a>
      </div>
      <footer>
        <a
          href="https://internship.zuri.team/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="zuri__icon">
            <img src="Vector.svg" alt="Zuri Internship Logo" />
            <img src="dotVector.svg" alt="Dot Vector" className="dot__icon" />
          </span>
        </a>

        <a href="/" className="footer__text">
          <span>HNG Internship 9 Frontend Task</span>
        </a>

        <a
          href="https://ingressive.org/about/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <img src="I4G.svg" alt="Ingressive for Good" />
          </span>
        </a>
      </footer>
    </>
  );
}

export default App;
