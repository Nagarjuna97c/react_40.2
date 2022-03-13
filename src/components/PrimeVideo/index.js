import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="movies-list-container">
        <MoviesSlider moviesList={actionMovies} heading="Action Movies" />
        <MoviesSlider moviesList={comedyMovies} heading="Comedy Movies" />
      </div>
    </div>
  )
}

export default PrimeVideo
