import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import LoginContext from '../../store/LoginContext';

const MainNavigation = () => {

  const {token, removeToken} = useContext(LoginContext);

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          {
            token && (
              <>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li>
                  <button onClick={removeToken}>Logout</button>
                </li>
              </>
            )
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
