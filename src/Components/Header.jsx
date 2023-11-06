import React, { useEffect } from 'react'
import { auth } from "../Utils/firebase"
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL, USER_PROFILE } from '../Utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [])

  return (
    <div className={(user === null) ? 'absolute px-8 py-2 bg-black opacity-80 z-10 w-full flex justify-between' :
      'absolute px-8 py-2 bg-black z-10 w-screen flex justify-between'} >
      <img className="w-32 h-12" src={LOGO_URL} alt='logo' />


      {user && (<div className='flex'>
        <p className='mt-2 mr-2 text-white'>{user.displayName}</p>

        <img className="w-8 h-8 rounded-sm" alt="userIcon" src={USER_PROFILE} />
        <button className='ml-3 text-white font-bold' onClick={handleSignOut}>SignOut</button>
      </div>)}
    </div>
  )
}

export default Header