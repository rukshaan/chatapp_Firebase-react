import React, { useState } from 'react';
import './detail.scss';
import sharedPhoto from '../../assets/pexels-unchalee-srirugsar-14114-85773.jpg';

const Detail = () => {
  const [showSetting, setShowSetting] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showFiles, setShowFiles] = useState(false);

  return (
    <div className='detail'>
      <div className='user'>
        <img src="/avatar.png" alt='avatar'/>
        <h2>Rukshan.J</h2>
        <p>Hello from jeya.......</p>
      </div>

      <div className='info'>
        {/* Chat Setting */}
        <div className="option">
          <div className="title" onClick={() => setShowSetting(!showSetting)}>
            <span>Chat Setting</span>
            <img src={showSetting ? "/arrowUp.png" : "/arrowDown.png"} alt='toggle' />
          </div>
          {showSetting && (
            <div className="content">
              <p>Setting-related content goes here...</p>
            </div>
          )}
        </div>

        {/* Privacy & Help */}
        <div className="option">
          <div className="title" onClick={() => setShowPrivacy(!showPrivacy)}>
            <span>Privacy & Help</span>
            <img src={showPrivacy ? "/arrowUp.png" : "/arrowDown.png"} alt='toggle' />
          </div>
          {showPrivacy && (
            <div className="content">
              <p>Privacy-related content goes here...</p>
            </div>
          )}
        </div>

        {/* Shared Photos */}
        <div className="option">
          <div className="title" onClick={() => setShowPhotos(!showPhotos)}>
            <span>Shared Photos</span>
            <img src={showPhotos ? "/arrowUp.png" : "/arrowDown.png"} alt='toggle' />
          </div>
          {showPhotos && (
            <div className="photos">
              {[1, 2, 3, 4].map((_, index) => (
                <div className="photoItem" key={index}>
                  <div className="photoDetail">
                    <img src={sharedPhoto} alt='shared' />
                    <span>Photo_2025_2.png</span>
                  </div>
                  <img src="/download.png" alt='download' className='icon'/>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Shared Files */}
        <div className="option">
          <div className="title" onClick={() => setShowFiles(!showFiles)}>
            <span>Shared Files</span>
            <img src={showFiles ? "/arrowUp.png" : "/arrowDown.png"} alt='toggle' />
          </div>
          {showFiles && (
            <div className="content">
              <p>File list or attachments go here...</p>
            </div>
          )}
        </div>

        <button>Block User</button>
        <button className='btn'>Logout</button>
      </div>
    </div>
  );
};

export default Detail;
