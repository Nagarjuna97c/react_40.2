import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {itemDetails} = props
  const {thumbnailUrl, videoUrl} = itemDetails

  return (
    <Popup
      modal
      trigger={
        <img src={thumbnailUrl} alt="thumbnail" className="movie-image" />
      }
    >
      {close => (
        <div className="popup-container">
          <ReactPlayer url={videoUrl} controls />
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
          >
            <IoMdClose className="icon" testid="closeButton" />
          </button>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
