import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignIn,setIsSignIn] =useState(true);

  const handleSignUp = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />
      <div className="absolute">      
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'/>
      </div>

      <form className="absolute bg-[rgba(0,0,0,.75)] p-4 flex flex-col w-[320px] justify-center items-center py-14 m-auto right-0 left-0 mt-40 rounded-lg">
        <h2 className="text-white">{isSignIn ? "Sign In" : "Sign Up"}</h2>
        <input type="text" placeholder="Name" className={!isSignIn ? "w-72 p-2 m-2 text-[#8c8c8c] bg-[#333] mt-5 rounded-sm" : "hidden" }/>
        <input type="email" placeholder="Email Address" className="w-72 p-2 m-2 text-[#8c8c8c] bg-[#333] rounded-sm"/>
        <input type="password" placeholder="Password" className="w-72 p-2 m-2 bg-[#333] rounded-sm"/>
        <button className="bg-red-700 w-72 h-9 mt-4 rounded-sm text-white">{isSignIn ? "Sign in" : "Sign Up"}</button>
        <div className="w-[320px] flex justify-between mt-2">
          <div className="pl-4">
          <input type="checkbox" name="RememberMe"/> 
          <label className="text-white ml-2">Remember Me</label>
          </div>
          <p className="text-white pr-4 hover:cursor-pointer">Need help?</p>
        </div>
        <div className="w-[320px] flex justify-between mt-10 pl-4">
          <p className="text-white hover:cursor-pointer" onClick={handleSignUp}>{isSignIn ? "New to NetFlix? Sign Up now" : "Already a user? Sign In now"}</p>
        </div>
      </form>
    </div>
  )
}

export default Login