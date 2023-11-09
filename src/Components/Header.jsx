import React, { useEffect } from 'react'
import { auth } from "../Utils/firebase"
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL, USER_PROFILE } from '../Utils/constants';
import { togglegptSearchView } from '../Utils/gptSlice';
import { addMovieSearchObjects } from '../Utils/movieSlice';
import { addMovieSearchResults } from '../Utils/movieSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const handleGptClick = () => {
    dispatch(togglegptSearchView());
    dispatch(addMovieSearchObjects(null));
    dispatch(addMovieSearchResults(null));

  }


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
    <div className={(user === null) ? 'absolute px-8 py-2 bg-black opacity-80 z-10 w-screen flex justify-between' :
      'absolute px-8 py-2 bg-black z-10 w-screen flex justify-between'} >
      <img className="w-32 h-12" src={LOGO_URL} alt='logo' />


      {user &&
        (
          <div className='flex gap-x-4 p-2'>
            <button className='text-white h-[32px] p-0' onClick={handleGptClick}>{showGptSearch ? 'Home' : 'Search'}</button>
            <p className='mr-2 text-white pt-1'>{user.displayName}</p>
            <img className="w-8 h-8 rounded-sm" alt="userIcon" src={USER_PROFILE} />
            <button className=' text-white hover:cursor-pointer h-[32] p-0' onClick={handleSignOut}>SignOut</button>
          </div>
        )}
    </div>
  )
}

export default Header