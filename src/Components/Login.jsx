import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../Utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_IMAGE } from "../Utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const dispatch = useDispatch();

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const pass = useRef(null);
  const name = useRef(null);

  const handleLogin = () => {
    //console.log(email.current.value, pass.current.value);

    const message = isSignIn ? checkValidateData(email.current.value, pass.current.value, isSignIn) : checkValidateData(email.current.value, pass.current.value, name.current.value, isSignIn)
    setErrMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: ""
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            //navigate("/browse"); //navigate user to browse on signup or login
            // ...
          }).catch((error) => {
            // An error occurred
            setErrMessage(error.message);
            // ...
          });
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage)
          // ..
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          //("/browse"); //navigate user to browse on signup or login
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage)
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover sm:w-screen"
          src={BG_IMAGE}
          alt="logo"
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="absolute bg-[rgba(0,0,0,.75)] p-4 flex flex-col w-[320px] justify-center items-center py-14 m-auto right-0 left-0 mt-40 rounded-lg">
        <h2 className="text-white">{isSignIn ? "Sign In" : "Sign Up"}</h2>
        <input
          ref={name}
          type="text"
          placeholder="Name"
          className={
            !isSignIn
              ? "w-72 p-2 m-2 text-[#8c8c8c] bg-[#333] mt-5 rounded-sm"
              : "hidden"
          }
        />
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-72 p-2 m-2 text-[#8c8c8c] bg-[#333] rounded-sm"
        />
        <input
          ref={pass}
          type="password"
          placeholder="Password"
          className="w-72 p-2 m-2 bg-[#333] rounded-sm"
        />
        <p className="text-red-700">{errMessage}</p>
        <button
          className="bg-red-700 w-72 h-9 mt-4 rounded-sm text-white"
          onClick={handleLogin}
        >
          {isSignIn ? "Sign in" : "Sign Up"}
        </button>
        <div className="w-[320px] flex justify-between mt-2">
          <div className="pl-4">
            <input type="checkbox" name="RememberMe" />
            <label className="text-white ml-2">Remember Me</label>
          </div>
          <p className="text-white pr-4 hover:cursor-pointer">Need help?</p>
        </div>
        <div className="w-[320px] flex justify-between mt-10 pl-4">
          <p className="text-white hover:cursor-pointer" onClick={handleSignUp}>
            {isSignIn
              ? "New to NetFlix? Sign Up now"
              : "Already a user? Sign In now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
