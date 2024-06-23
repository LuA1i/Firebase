import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const [user] = useAuthState(auth)
  const signUserOut = async () => {
    await signOut(auth)
  }
  return (
    <div>
      <div className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        {!user ? (
          <Link className="link" to="/login">
            Login
          </Link>
        ) : (
          <Link className="link" to="/create-post">
            Create Post
          </Link>
        )}

        <div className="profile">
          {user && (
            <>
              <p>{auth.currentUser?.displayName}</p>
              <img src={auth.currentUser?.photoURL || ''} />
              <button className="signout" onClick={signUserOut}>
                Sign out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
