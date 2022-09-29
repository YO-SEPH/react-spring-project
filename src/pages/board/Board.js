import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Pagination from 'react-js-pagination';

import CommonTable from '../../component/table/CommonTable'
import CommonTableColumn from '../../component/table/CommonTableColumn'
import CommonTableRow from '../../component/table/CommonTableRow'
import BoardHeader from './BoardHeader';
import Paging from '../../component/paging/Paging';



function GetData() {
    const [boards, setBoards] = useState([]);
     
    const fetchData = async () => {
        const request = await axios.get(`http://localhost:8080/api/boards`)
        const data = request.data;
        console.log(data)
        setBoards(data)
        }

        useEffect(() => {
            fetchData()
        }, [])
  
        const board = (Object.values(boards)).map((voc) => (
            <CommonTableRow key={voc.uid}>
              <CommonTableColumn>{voc.uid}</CommonTableColumn>
              <CommonTableColumn>
                <Link to={`/board/${voc.uid}`}>
                  {voc.title}
                </Link>
              </CommonTableColumn>
              <CommonTableColumn>{voc.insertTime}</CommonTableColumn>
              <CommonTableColumn>{voc.writer}</CommonTableColumn>
            </CommonTableRow>
          ));
  
    return board;
  }
  
  function Board() {
    const board = GetData();
    

    return (
    <>
        <h1 align="center">게시판</h1>
        <BoardHeader></BoardHeader>
        <CommonTable headersName={['글번호', '제목', '등록일', '이름']}>
            {board}
        </CommonTable>
        <br/><br/>
        <Paging/>
    </>);
  }
  export default Board;



//   function Board({itemsPerPage}) {
//     const [boards, setBoards] = useState([]);
    // const [currentItems, setCurrentItems] = useState(null);
    // const [currentItems, setCurrentItems] = useState(null);
    // const [pageCount, setPageCount] = useState(0);
    // const [itemOffset, setItemOffset] = useState(0);

//     useEffect(() => {
//       // Fetch items from another resources.
//       const endOffset = itemOffset + itemsPerPage;
//       console.log(`Loading items from ${itemOffset} to ${endOffset}${boards}`);
//       setCurrentItems(boards.slice(itemOffset, endOffset));
//       setPageCount(Math.ceil(boards.length / itemsPerPage));
//     }, [itemOffset, itemsPerPage]);

//     const handlePageClick = (event) => {
//             const newOffset = (event.selected * itemsPerPage) % boards.length;
//             console.log(
//               `User requested page number ${event.selected}, which is offset ${newOffset}`
//             );
//             setItemOffset(newOffset);
//           };

//     const fetchData = async () => {
//         const request = await axios.get(`http://localhost:8080/api/boards`)
//         const data = request.data;
//         console.log(data)
//         setBoards(data)
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])


//     return (
//         <>
//         <table>
//             {/* <thead>
//                 <th>번호</th>
//                 <th>제목</th>
//                 <th>내용</th>
//                 <th>작성자</th>
//             </thead> */}
//             <tbody>
            
//             { currentItems &&
//             boards.map((board)=>(
//                 <tr key={board.uid}>
//                     <td>{board.uid}</td>
//                     <td>{board.title}</td>
//                     <td>{board.content}</td>
//                     <td>{board.writer}</td>
//                 </tr>
//             ))
//             }
//             </tbody>
//         </table>
//         <ReactPaginate 
//          breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null} />

//         </>

//     )
// }
// export default Board;

