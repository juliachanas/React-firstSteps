const NavBar = () => {
  return (
    <nav>
      <div>
        <a href='/'>
          <i className='fas fa-tasks'></i>
        </a>
      </div>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/favorite'>Favorite</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
