import './App.css';
import ihLogo from "./images/ih-logo.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="top-div">
        <navbar>
          <img src={ihLogo} alt="Logo" /> 
          <img src={menu} alt="menu" className="menu"/>
        </navbar>
        <div>
          <h1>Say hello to<br></br>ReactJS</h1>
          <p>You will learn how to use<br></br>the most popular frontend library,<br></br>and become a super Ninja developer.</p>
          <button id="button">Awesome!</button>
        </div>
      </div>
      <div className="bottom-div">
        <div>
          <img src={icon1} alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to creative interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="icon2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div>
          <img src={icon4} alt="icon4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
