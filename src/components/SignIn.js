import '../styles/sign-in.scss'

function SignIn({auth, firebase}) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <button
      type='button'
      className='sign-in'
      onClick={signInWithGoogle}
    >
      Sign in with <i className="fa-brands fa-google"></i> 
    </button>
  )
}

export default SignIn