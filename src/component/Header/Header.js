import "./Header.scss";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <Link to="/">
          <span>React-Spring</span>
        </Link>
      </div>
      <div className="header-menu">
        <Link to="/board">게시판</Link>
        <Link to="/movie">영화</Link>
        <Link to="/todolist">투두리스트</Link>
        <Link to="/weather">날씨</Link>
        <Link to="/login">로그인</Link>
        <Link to="/register">회원가입</Link>
      </div>
    </div>
  );
};

export default Header;