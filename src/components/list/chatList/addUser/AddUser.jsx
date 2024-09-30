import React from 'react'
import "./addUser.css"

function AddUser() {
  return (
    <div className='addUser'>
      <form>
      <input type="text" placeholder='enter username' name='username' />
      <button>search</button>
      </form>

      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Jane Doe</span>
        </div>
        <button>add user</button>
      </div>

    </div>
  )
}

export default AddUser
