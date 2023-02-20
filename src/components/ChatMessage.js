import '../styles/chat-message.scss'

function ChatMessage({message, auth}) {
  const {text, uid, photoURL, createdAt} = message

  const date = new Date(createdAt?.seconds * 1000)
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  console.log(date)

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
  return (
    <div className={`message__${messageClass}`}>
      <div className="icon__box">
        <img className='message__icon' src={photoURL}/>
      </div>
      <div className="message__box">
        <p className='message__text'>{text}</p>
        <span className='message__time'>{`${hours}:${minutes}`}</span>
      </div>
    </div>
  )
}

export default ChatMessage