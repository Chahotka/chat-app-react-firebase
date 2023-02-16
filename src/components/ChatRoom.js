import { useEffect, useState, useRef } from 'react'
import '../styles/chat-room.scss'
import ChatMessage from './ChatMessage'
import SignOut from './SignOut'

function ChatRoom({firebase, firestore, auth, useCollectionData}) {
  const dummy = useRef()

  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, {idField: 'id'})

  const [formValue, setFormValue] = useState('')

  
  const sendMessage = async(e) => {
    e.preventDefault()

    const { uid, photoURL } = auth.currentUser

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
  
    setFormValue('')

    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  console.log(messages)
  return (
    <>
      <SignOut auth={auth} />
      <div>
        { messages && messages.map((msg, i) => <ChatMessage auth={auth} message={msg} key={i}/>) }

        <div ref={dummy}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input 
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type='submit'>
          <i className="fa-solid fa-feather"></i>
        </button>
      </form>
    </>
  )
}

export default ChatRoom