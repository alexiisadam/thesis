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
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <h1>Welcome!</h1>
        <div className="h2-container">
          <button className="bg-[#F9C22E] py-1 px-4 rounded hover:bg-yellow-500 transition-all">
            Get Started
          </button>
          <button className="bg-[#F9C22E] py-1 px-4 rounded hover:bg-yellow-500 transition-all">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
