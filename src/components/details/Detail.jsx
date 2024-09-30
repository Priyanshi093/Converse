import React from 'react'
import "./detail.css";

function Detail() {
  return (
    <div className='detail'>

      <div className='user'>
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>my name is Jane.</p>
      </div>

      <div className='info'>

        <div className="options">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="options">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="options">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./favicon.png" alt="" />
                <span>Photo_101.png</span>
              </div>
             <img src="./download.png" alt="" className='icon'/>
            </div>
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./favicon.png" alt="" />
                <span>Photo_101.png</span>
              </div>
             <img src="./download.png" alt="" className='icon'/>
            </div>
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./favicon.png" alt="" />
                <span>Photo_101.png</span>
              </div>
             <img src="./download.png" alt="" className='icon'/>
            </div>
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./favicon.png" alt="" />
                <span>Photo_101.png</span>
              </div>
             <img src="./download.png" alt="" className='icon'/>
            </div>
          </div>


        </div>

        <div className="options">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <button>Block User</button>
        <button className='logout'>Log Out</button>

      </div>
    </div>
  )
}

export default Detail
