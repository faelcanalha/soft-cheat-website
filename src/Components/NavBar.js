function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav">
        <a className="nav-brand" href="/">
          SOFT
        </a>
        <ul>
          <li>
            <a href="#home">
              <span className="">Home</span>
            </a>
          </li>
          <li>
            <a href="#prices">
              <span className="">Prices</span>
            </a>
          </li>
          <li>
            <a href="/dashboard">
              <span className="">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
