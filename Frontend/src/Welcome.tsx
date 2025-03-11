import "./styles/welcome.css";

function Welcome() {
  return (
    <>
      <div className="navbar">
        <div className="nav-title">
          <h2>DoodleDiv</h2>
        </div>

        <nav className="navbar-links">
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">Progress</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="welcome-box">
        <h1>Welcome!</h1>
        <div className="h2-container">
          <button className="button">Get Started</button>
          <button className="button">Continue</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
