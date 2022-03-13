import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList, heading} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="movies-slider">
      <h1 className="heading">{heading}</h1>
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem key={eachItem.id} itemDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
