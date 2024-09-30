import React, { useState } from 'react'
import  './login.css'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../lib/firebase.js'
import {db} from '../lib/firebase.js'
import { doc, setDoc } from 'firebase/firestore'

function Login() {
    const [avatar, setAvatar] = useState ({
        file: null,
        url : ""
    })

    const handleAvatar = e =>{
        if(e.target.files[0]){
            setAvatar({
                file : e.target.files[0],
                url : URL.createObjectURL( e.target.files[0])
            })
        }
    }
  
    const handleRegister = async e => {
        e.preventDefault()  
        const formData = new FormData(e.target);

        const {username, email, password} = Object.fromEntries(formData);

        try{
          /*method of firebase auth to create new users from email & password*/ 
          const res = await createUserWithEmailAndPassword(auth, email, password) 

         /*setDoc : Firestore method used to write data to a document. It can either
          create a new document or overwrite an existing document.*/
          //creating new user
          await setDoc(doc(db, "users", res.user.uid), {
            username,
            email,
            id : res.user.uid,
            blocked : []
          });

          //creating new chat document for new user
          await setDoc(doc(db, "userChats", res.user.uid), {
            chats : [],
          });

          toast.success("Account created! You can login now.")
        }

        catch(err){
           console.log(err);
           toast.error(err.message);
        }
    }


    
    const handleLogin = e => {
        e.preventDefault()  
    }


  return (
    <div className='login'>

       <div className="item">
          <h2>Welcome Back,</h2>
           <form onSubmit={handleLogin}>
            <input type="text" placeholder="E-mail" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Sign In</button>
           </form>
       </div>

       <div className="separator">
         <img src="./Converse.png" alt="" />
       </div>

       <div className="item">
       <h2>Create a new account ?</h2>
           <form onSubmit={handleRegister}>
            <label htmlFor="file">
                <img src={ avatar.url || "./userAvatar.jpg"} alt="" />
                Upload an image
            </label>
            <input type="file" id='file' style={{display:'none'}}
             onChange={handleAvatar}/>
            <input type="text" placeholder="Username" name="username" />
            <input type="text" placeholder="E-mail" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Sign Up</button>
           </form>
       </div>

    </div>
  )
}

export default Login
