import React from 'react'
import ChatRoom from './ChatRoom'
import SignIn from './SignIn'

function Main({ user, firebase, firestore, auth, useCollectionData}) {
  return (
    <div>
      {user
        ?<ChatRoom 
          auth={auth} 
          firebase={firebase}
          firestore={firestore} 
          useCollectionData={useCollectionData}
        />
        :<SignIn 
          auth={auth} 
          firebase={firebase}
        />
      }
    </div>
  )
}

export default Main