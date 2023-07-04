import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Recommend.css'
import { useSelector } from 'react-redux'
import { selectRecommend } from '../features/movie/movieSlice'

export default function Recommend() {

  const movies = useSelector(selectRecommend)
  
  return (
    <>
      <h3>Recommended for You</h3>
      <div className="content1">
        {
          movies && movies.map((movie, key) => (
            <div className="wrap1" key={key}>
              {movie.title}
              <Link to={'/details/'+ movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}