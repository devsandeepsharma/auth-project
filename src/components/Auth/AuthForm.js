import { useState, useRef, useContext } from 'react';

import classes from './AuthForm.module.css';
import LoginContext from "../../store/LoginContext"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAYF-03nwhrPhHSOd136R8HRKKbnm4zZC0",
  authDomain: "myecommerse-3e28e.firebaseapp.com",
  databaseURL: "https://myecommerse-3e28e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myecommerse-3e28e",
  storageBucket: "myecommerse-3e28e.firebasestorage.app",
  messagingSenderId: "1092817480335",
  appId: "1:1092817480335:web:9e2e5a3087bae57bfadefa",
  measurementId: "G-QC0GWNM3C1"
};

const AuthForm = () => {

  const {addToken} = useContext(LoginContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const app = initializeApp(firebaseConfig);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(null);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const auth = getAuth(app);

    if(email === "" || password === "") {
      return;
    }

    if(isLogin) {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        addToken(user.accessToken)
        localStorage.setItem("token", user.accessToken);
        console.log(user.accessToken)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setIsError(errorMessage);
      }).finally(() => {
        setIsLoading(false);
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setIsError(errorMessage);
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleFormSubmit}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordRef}
          />
        </div>
        <div className={classes.actions}>
          {
            isError && <p style={{color: "white"}}>{isError}</p>
          }
          {
            isLoading ? <p style={{color: "white"}}>Sending Request...</p>
            : <button type='submit'>
                {isLogin ? 'Login' : 'Sign up'}
              </button>
          }
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
