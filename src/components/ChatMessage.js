import '../styles/chat-message.scss'

function ChatMessage({message, auth}) {
  const {text, uid, photoURL} = message

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'


  return (
    <div className={`message__${messageClass}`}>
      <img className='message__icon' src={photoURL}/>
      <p className='message__text'>{text}</p>
    </div>
  )
}

export default ChatMessage