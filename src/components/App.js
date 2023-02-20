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
  apiKey: "AIzaSyBXcWsetohJFuvkY4UIhyt9EsCLuBokyeU",
  authDomain: "chat-app-9a128.firebaseapp.com",
  projectId: "chat-app-9a128",
  storageBucket: "chat-app-9a128.appspot.com",
  messagingSenderId: "390558827795",
  appId: "1:390558827795:web:a3be9207cc02fa4e4586e6",
  measurementId: "G-CQBZFR1KL0"
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