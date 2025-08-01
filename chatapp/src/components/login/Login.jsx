import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ''
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  return (
    <div className='login'>
        <div className='container'>
            <div className="item">
                <h2>Welcome back ,</h2>
            

                {/* First form (login) */}
                <form>
                    <input type='email' placeholder='enter email' name='email' />
                    <input type='password' placeholder='enter password' name='password' />
                    <button>SignIn</button>
                </form>
            </div>

            {/* Second form (signup with avatar) */}
            <div className="seperator">
                <form>
                <label htmlFor='file'>
                    <img src={avatar.url || "/avatar.png"} alt="avatar" />
                    Upload an image
                </label>
                <input
                    type='file'
                    id='file'
                    style={{ display: "none" }}
                    onChange={handleAvatar}
                />
                <input type='text' placeholder='Enter Username' name='username' />
                <input type='email' placeholder='enter email' name='email' />
                <input type='password' placeholder='enter password' name='password' />
                <button>SignUp</button>
                </form>
            </div>

            <div className="item"></div>
        </div>
    </div>
  );
};

export default Login;
