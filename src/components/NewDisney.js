import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Recommend.css'
import { useSelector } from 'react-redux'
import { selectNewDisney } from '../features/movie/movieSlice'

export default function NewDisney() {
  const movies = useSelector(selectNewDisney)

  return (
    <>
      <h3>New Disney+</h3>
      <div className="content1">
        {
          movies && movies.map((movie, key) => (
            <div className="wrap1" key={key}>
              {movie.title}
              <Link to={'/details/' + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}
