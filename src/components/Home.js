import React from 'react'
import "../css/Home.css"
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
// import Viewer from './Viewer'
import Recommend from './Recommend';
import NewDisney from './NewDisney';
import Trending from './Trending';
import Original from './Original';
// eslint-disable-next-line
import { setMovie} from '../features/movie/movieSlice';
import { selectUserName } from './../features/user/userSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import db from '../firebase'

export default function Home() {

  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)

  let recommends = []
  let newDisneys = []
  let originals = []
  let trendings = []

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      // eslint-disable-next-line
      snapshot.docs.map((doc) => {
        // eslint-disable-next-line
        switch (doc.data().type){
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(setMovie({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trendings,
      }))
    });
  }, [userName]);

  return (
    <div className="cont">
      <ImgSlider />
      <Viewers />
      {/* <Viewer/> */}
      <Recommend />
      <Trending />
      <Original />
      <NewDisney />
    </div>
  )
}