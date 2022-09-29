import React, { useState } from 'react';

import Pagination from 'react-js-pagination';
import './Paging.css'

const Paging = () => {
    const [ page, setPage ] = useState(1);

    const handlePageChange = (page) => {
      setPage(page);
      console.log(page);  
    };

  return(
    <Pagination
        activePage={page} //현재 페이지
        itemsCountPerPage={10} // 한페이지당 보여줄 리스트 아이템 개수
        totalItemsCount={450} // 총 아이템 개수
        pageRangeDisplayed={5} // Pagination 내에서 버여줄 페이지 범위
        prevPageText={"<"} // "이전" 을 나타낼 텍스트
        nextPageText={">"} // "다음" 을 나타낼 텍스트
        onChage={handlePageChange}/> //페이지가 바뀔때 핸들링 해 줄 함수
  );
};
export default Paging;