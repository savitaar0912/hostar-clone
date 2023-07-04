import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Recommend.css'
import { selectTrending } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'

export default function Trending() {
  const movies = useSelector(selectTrending)

  return (
    <>
      <h3>Trending</h3>
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