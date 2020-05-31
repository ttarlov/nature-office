import React from 'react'
import IosCloudyOutline from 'react-ionicons/lib/IosCloudyOutline'
import IosCloudy from 'react-ionicons/lib/IosCloudy'
import IosSunnyOutline from 'react-ionicons/lib/IosSunnyOutline'


const Loading = () => {
  return (
    <section className="loading-container">
      <div className="animation-container">
        <IosSunnyOutline
          className="sun"
          color="#9ea1a4"
          fontSize="5.3rem"
          rotate={true}
        />
        <IosCloudy
          color="#efefef"
          className="cloud"
          fontSize="8rem"
        />
        <IosCloudyOutline
          className="cloud-outline"
          color="#9ea1a4"
          fontSize="8rem"
        />
        <div className='rain'>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
          <span className="drop"></span>
        </div>
      </div>
      <div className="loading-message">
        <p>LOOKING OUTSIDE FOR WORK SPACES...</p>
        <p>ONE SEC</p>
      </div>
    </section>
  )
}

export default Loading;
