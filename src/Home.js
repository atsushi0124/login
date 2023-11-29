import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function Home() {
  const [user] = useAuthState(auth);


  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
          </>
      ) : (
          <SignInButton />
      )}
    </div>
  )
}

export default Home;

// Googleでサインイン
function SignInButton() {
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider );
  };

  return (
    <button onClick={SignInWithGoogle}>
      <p>Googleでサインイン</p>
    </button>
  );
};

// サインアウト
function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>Googleでサインアウト</p>
    </button>
  );
};

function UserInfo() {
  return (
    <div className='userInfo'>
      <img src={auth.currentUser.photoURL} alt="" />
      <p>{auth.currentUser.displayName} </p> 
    </div>
   
  );
};

