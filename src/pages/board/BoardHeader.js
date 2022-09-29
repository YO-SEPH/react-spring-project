import React from 'react';
import { Link } from 'react-router-dom';
import './BoardHeader.css';

const BoardHeader = props => {
  const { headersName, children } = props;

  return (
    <div className="voc-header">
        <Link to='/board/create'>
            <button align="right" className="voc-view-go-list-btn" >
            게시글 작성
            </button>
        </Link>
        <br/>
    </div>
  )
}

export default BoardHeader;