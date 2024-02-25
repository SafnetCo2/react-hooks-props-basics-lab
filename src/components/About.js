import React from "react";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

function Links({ github, linkedin }) {
  return (
    <div>
      <a href={github}>Github</a>
      <a href={linkedin}>Linkedin</a>
      <About bio="" github="https://github.com" linkedin="https://linkedin.com" />

    </div>
  );
}

export default About;
