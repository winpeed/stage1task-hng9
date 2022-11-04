/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Profile() {
  const [slackName, setSlackName] = useState("PraiseObende");
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <div className="share__button">
        <img src="Avatar share button.svg" alt="Share Button 1" />
      </div>

      <div className="share__button__two">
        <img src="Avatar share button_2.svg" alt="Share Button 2" />
      </div>

      <div className="avatar__wrapper">
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
          onMouseEnter={handleMouseEnter}
        />
        <span
          className={isHover ? "span__design" : ""}
          onMouseOut={handleMouseLeave}
        ></span>
        <img
          src="camera.svg"
          alt="Avatar Upload"
          className={isHover ? "camera show__camera" : "camera"}
        />
      </div>

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

        <a href="/contact" id="contact" target="_blank" rel="noreferrer">
          Contact Me
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
    </>
  );
}

export default Profile;
