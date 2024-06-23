import React from 'react'
import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
  }

  return (
    <div>
      <p>Sign In with Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default Login
