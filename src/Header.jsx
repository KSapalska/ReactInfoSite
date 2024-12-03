function Header() {
    return (
      <header className="header">
        <img className="logo" src="src/assets/react-logo.png" alt="React logo" />
        <nav>
          <ul className="nav-list">
            <li>Pricing</li>  
            <li>About</li>  
            <li>Contact</li>  
          </ul>
        </nav>
      </header>
    );
  }


  export default Header;