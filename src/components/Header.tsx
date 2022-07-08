import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        height: 60,
        padding: 0,
        marginBottom: 20,
        background: "blue",
        color: "white",
      }}
    >
      <nav className='header-nav'>
        <ul className='menu'>
          <li className='menu__item'>
            <NavLink to='/posts' className='menu__item-link'>
              Posts
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink to='/users' className='menu__item-link'>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
