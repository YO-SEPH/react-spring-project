import React, { useEffect, useState } from "react";
import './Paging.css';
import Pagination from "react-js-pagination";
import axios from "axios";
import Page from "./Page";

const Paging = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/boards`);
      setBoards(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);  

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (boards) => {
    let currentPosts = 0;
    currentPosts = boards.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
    console.log(currentPage);
  };

  return (
    <>
    <Page posts={currentPosts(boards)} loading={loading}></Page>
    <Pagination
      activePage={currentPage}//현재 페이지
      itemsCountPerPage={10}// 한페이지당 보여줄 리스트 아이템 개수
      totalItemsCount={boards.length}// 총 아이템 개수
      pageRangeDisplayed={5}// Pagination 내에서 버여줄 페이지 범위
      prevPageText={"<"}// "이전" 을 나타낼 텍스트
      firstPageText={"<<"}//"처음" 을 나타낼 텍스트
      nextPageText={">"}// "다음" 을 나타낼 텍스트
      lastPageText={">>"}//"마지막" 을 나타낼 텍스트
      onChange={handlePageChange}//페이지가 바뀔때 핸들링 해 줄 함수
      paginate={setCurrentPage}
      postsPerPage={postsPerPage}
    />
</>
  );
};

export default Paging;
