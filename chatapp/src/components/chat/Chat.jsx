import React, { useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'
const Chat = () => {
  const [open,setOpen]=useState(false)
    const [text, setText] = useState('')

  const handleEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji)
    setOpen(false); // Close the emoji picker after selection
  }
  return (
    <div className='chat'>
      <div className='top'>
        <div className="user">
          <img src='./avatar.png' alt="" />
          <div className='texts'>
            <span>Rukshan.Jeya</span>
            <p>Hello</p>
          </div>
        </div>
        <div className="icons">
          <img src='./phone.png' alt="" />
          <img src='./video.png' alt="" />
          <img src='./info.png' alt="" />
        </div>
      </div>

      <div className='center'>
        <div className='message own'>
          {/* <img src='./avatar.png' alt="" /> */}
          <div className='texts'>
            <p>Hello Rukshan jeyarajah </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt="" />
          <div className='texts'>
            <p>Hello Rukshan jeyarajah </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message own'>
          {/* <img src='./avatar.png' alt="" /> */}
          <div className='texts'>
            <p>Hello Rukshan jeyarajah </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt="" />
          <div className='texts'>
            <p>Hello Rukshan jeyarajah </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message own'>
          {/* <img src='./avatar.png' alt="" /> */}
          <div className='texts'>
            <p>Hello Rukshan jeyarajah </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt="" />
          <div className='texts'>
            <p>Hello Rukshan jeyarajah </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message own'>
          {/* <img src='./avatar.png' alt="" /> */}
          <div className='texts'>
            <p>Hello Rukshan jeyarajah </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt="" />
          <div className='texts'>
            <p>Hello Rukshan jeyarajah </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className='message own'>
          {/* <img src='./avatar.png' alt="" /> */}
          <div className='texts'>
            <img src='https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/' alt="" />
            <p>Hello Rukshan jeyarajah </p>
            <span>1 minute ago</span>
          </div>
        </div>

      </div>

      <div className='bottom'>
        <div className='icons'>
          <img src='./img.png' alt="" />
          <img src='./camera.png' alt="" />
          <img src='./mic.png' alt="" />
        </div>
        <input type="text" placeholder='Type something...'value={text}
          onChange={(e) => setText(e.target.value)} />
        <div className='emoji'>
          <img
            src='./emoji.png'
            alt=""
            onClick={() => setOpen(!open)}
            style={{ cursor: 'pointer' }}
          />
          
            <div className="emojiPickerContainer">
              <div className="picker">
                <EmojiPicker open ={open} onEmojiClick={handleEmojiClick} />
              </div>
              
            </div>
          
        </div>
        <button className='sendButton'>send</button>
      </div>
    </div>
  )
}

export default Chat