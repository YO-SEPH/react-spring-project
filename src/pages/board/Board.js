import React from 'react';
import Paging from '../../component/paging/Paging';
// import axios from 'axios';
// import { Link } from 'react-router-dom'
// import Pagination from 'react-js-pagination';

// import CommonTable from '../../component/table/CommonTable'
// import CommonTableColumn from '../../component/table/CommonTableColumn'
// import CommonTableRow from '../../component/table/CommonTableRow'
// import BoardHeader from './BoardHeader';
// import Paging from '../../component/paging/Paging';

function Board() {
  // const board = GetData();
  
  return (
  <>
      {/* <h1 align="center">게시판</h1>
      <BoardHeader></BoardHeader>
      <CommonTable headersName={['글번호', '제목', '등록일', '이름']}>
          {board}
      </CommonTable> */}
      <br/><br/>
      <Paging/> 
  </>);
}
export default Board;


// function GetData() {
//     const [boards, setBoards] = useState([]);
     
//     const fetchData = async () => {
//         const request = await axios.get(`http://localhost:8080/api/boards`)
//         const data = request.data;
//         console.log(data)
//         setBoards(data)
//         }

//         useEffect(() => {
//             fetchData()
//         }, [])
  
//         const board = (Object.values(boards)).map((voc) => (
//             <CommonTableRow key={voc.uid}>
//               <CommonTableColumn>{voc.uid}</CommonTableColumn>
//               <CommonTableColumn>
//                 <Link to={`/board/${voc.uid}`}>
//                   {voc.title}
//                 </Link>
//               </CommonTableColumn>
//               <CommonTableColumn>{voc.insertTime}</CommonTableColumn>
//               <CommonTableColumn>{voc.writer}</CommonTableColumn>
//             </CommonTableRow>
//           ));
  
//     return board;
//   }

