import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Aarohi Software Intern</h1>
      </header>
      <div className="content">
        <div className="About Me">
          <p>
            I am Aditi Ugale, a third-year B.TECH student with a passion for UI/UX
            design. I'm excited to learn from the team and bring a fresh perspective
            to our projects. Looking forward to contributing and growing together!
          </p>
          <div>Position: UI/UX developer</div>
          <div>Education: B.Tech in Computer Science and Design</div>
          <img src="/Resume.jpeg" alt="Aditi Ugale's Resume"  width={300} />
      
        </div>
        <div className="block"></div>
      </div>
      <footer className="footer">
        <p>Contact: 8956279814</p>
        <p>E-mail: aditi.ugale13@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
