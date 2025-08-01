import { useState } from 'react';
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login"
import Notification from './components/notification/Notification';

const App = () => {
  const [user, setUser] = useState(null); // Simulated auth

  return (
    <div className='container'>
      {/* {
        user ? ( */}
          <>
          <List/>
          <Chat/>
          <Detail/>
          </>
      {/* //   ): (<Login/>)
      // } */}
      {/* <Notification/> */}
    </div>
  )
}

export default App