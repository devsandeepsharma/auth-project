import { useContext, useRef, useState } from 'react';
import classes from './ProfileForm.module.css';
import LoginContext from '../../store/LoginContext';

const ProfileForm = () => {

  const passRef = useRef();
  const {token} = useContext(LoginContext);
  const [err, setErr] = useState();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const newPass = passRef.current.value;
    setErr("");
    
    if(newPass === "") {
      return;
    }

    try {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAYF-03nwhrPhHSOd136R8HRKKbnm4zZC0', {
        method: 'POST',
        body: JSON.stringify({
          idToken: token,
          password: newPass,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message || 'Password change failed!');
      }

      setErr('Password changed successfully!');
    } catch (err) {
      setErr(err.message);
    }

  }


  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
        {err && <p>{err}</p>}
      </div>
    </form>
  );
}

export default ProfileForm;
