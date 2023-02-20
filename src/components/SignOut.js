import '../styles/sign-out.scss'

function SignOut({auth}) {
  return auth.currentUser && (
    <button
      className='sign-out'
      onClick={() => auth.signOut()}
    >
      Sign out
    </button>
  )
}

export default SignOut