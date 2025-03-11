import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">DoodleDiv</h2>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/games">Games</a></li>
                <li><a href="/progress">Progress</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;