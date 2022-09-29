import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './pages/board/Board';
import BoardView from './pages/board/BoardView';
import BoardCreate from './pages/board/BoardCreate';
import MovieMain from './component/movie/MovieMain';
import NotFound from './pages/NotFound/NotFound';
import MovieDetails from './pages/movie/MovieDetails';
import Home from './pages/home/Home';



function App() {

  // 요청받은 정보를 담아줄 변수 선언

  // const [ testStr2, setTestStr2] = useState('');
  // function callback2(str) {
  //   setTestStr2(str);
  // }
  // useEffect(
  //     () => {
  //       axios({
  //           url: '/movie',
  //           method: 'GET'
  //       }).then((res) => {
  //           callback2(res.data);
  //       })
  //     }, []
  // );

  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie' element={<MovieMain/>} />
          <Route path='/movie/:title' element={<MovieDetails/>}/>
          <Route path='/board' element={<Board />} />
          <Route path='/board/:boardUID' element={<BoardView />} />
          <Route path='/board/create' element={<BoardCreate/>} />
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;