import React from 'react'
import '../styles/App.scss'
import Header from './Header'
import Main from './Main'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


firebase.initializeApp({
  // code
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const [user] = useAuthState(auth)

  
  return (
    <div className={`app${user ? '__signed' : ''}`}>
      {user && <Header auth={auth}/>}
      <Main 
        user={user}
        auth={auth}
        firestore={firestore}
        firebase={firebase}
        useCollectionData={useCollectionData}
      />
    </div>
  );
}



export default App;