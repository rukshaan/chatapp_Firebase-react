import React, { useState } from 'react';
import './login.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth,db } from "../../lib/firebase"; // Adjust the import path as necessary
import { doc,setDoc } from 'firebase/firestore';
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
  const handleLogin = e =>{
    e.preventDefault();
    toast.warn("Hello !")
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(form);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        // NOTE: avatar.url is a temporary blob URL; upload to Storage later and save the downloadURL.
        avatar: avatar.url || "/avatar.png",
        blocked: [],
      });

      await setDoc(doc(db, "userChats", res.user.uid), { chats: [] });

      toast.success("Registration successful! You can login now.");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.message || "Registration failed!");
    }
  };


  return (
    <div className='login'>
        <div className='container'>
            <div className="item">
                <h2>Welcome back ,</h2>
            

                {/* First form (login) */}
                <form onSubmit={handleLogin}>
                    <input type='email' placeholder='enter email' name='email' />
                    <input type='password' placeholder='enter password' name='password' />
                    <button>SignIn</button>
                </form>
            </div>

            {/* Second form (signup with avatar) */}
            <div className="seperator">
                <form onSubmit={handleRegister}>
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
