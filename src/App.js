import React from 'react';
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './pages/board/Board';
import BoardView from './pages/board/BoardView';
import BoardCreate from './pages/board/BoardCreate';
import MovieMain from './component/movie/MovieMain';
import NotFound from './pages/NotFound/NotFound';
import MovieDetails from './pages/movie/MovieDetails';
import Todo from './pages/home/Todo';
import Home from './pages/home/Home';
import Login from './pages/sign-in/Login';
import Register from './pages/sign-up/register';
import Header from './component/Header/Header';
import Weather from './pages/weather/weather';




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
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/board' element={<Board />} />
          <Route path='/board/:boardUID' element={<BoardView />} />
          <Route path='/board/create' element={<BoardCreate/>} />
          <Route path='/movie' element={<MovieMain/>} />
          <Route path='/movie/:title' element={<MovieDetails/>}/>
          <Route path='todolist' element={<Todo/>}/>
          <Route path='/weather' element={<Weather/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;