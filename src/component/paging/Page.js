import React from "react";
import CommonTable from "../table/CommonTable";
import CommonTableColumn from "../table/CommonTableColumn";
import CommonTableRow from "../table/CommonTableRow";
import { Link } from 'react-router-dom'
import '../table/CommonTable.css';
import BoardHeader from "../../pages/board/BoardHeader";


const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <h1 align="center">게시판</h1>
        <BoardHeader></BoardHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '이름']}>
        {posts.map((post) => (
          <CommonTableRow key={post.uid}>
          <CommonTableColumn>{post.uid}</CommonTableColumn>
          <CommonTableColumn>
            <Link to={`/board/${post.uid}`}>
              {post.title}
            </Link>
          </CommonTableColumn>
          <CommonTableColumn>{post.insertTime}</CommonTableColumn>
          <CommonTableColumn>{post.writer}</CommonTableColumn>
        </CommonTableRow>
        ))}
        </CommonTable>
      <ul>
      </ul>
    </>
  );
};
export default Posts;




