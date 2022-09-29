import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BoardView.css';

// function GetData(boardUID) {
//     const [details, setDetails] = useState([]);


//     const fetchData = async () => {
//         const request = await axios.get(`http://localhost:8080/api/boards/`+ boardUID)

//         console.log(request.data)
//         setDetails(request.data)
//     }
//         useEffect(() => {
//             fetchData()
//         }, [])

//     const boardDetail =  (<>
//       <h2 align="center">게시글 상세정보</h2>
//       <div className="voc-view-wrapper">
//         {
//             details && <>
//                 <div className="voc-view-row">
//                     <label>게시글 번호</label>
//                     <label>{ details.uid }</label>
//                 </div>
//                 <div className="voc-view-row">
//                     <label>제목</label>
//                     <label>{ details.title }</label>
//                 </div>
//                 <div className="voc-view-row">
//                     <label>작성일</label>
//                     <label>{ details.insertTime }</label>
//                 </div>
//                 <div className="voc-view-row">
//                     <label>내용</label>
//                     <div>
//                         {
//                         details.content
//                         }
//                     </div>
//                 </div>
//             </>
//         }

//       </div></>)

//       return boardDetail;
//   }

//   function BoardView() {
//     const{boardUID} = useParams();
//     const boardDetail = GetData(boardUID);

//     return (<>
//       <div>
//           {boardDetail}
//       </div>
//     </>);
//   }

//   export default BoardView;

function BoardView() {
    const [details, setDetails] = useState([])
    const { boardUID } = useParams()

    const fetchData = async () => {
        const request = await axios.get(`http://localhost:8080/api/boards/` + boardUID)
        setDetails(request.data)
    }
    const deleteSubmit = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': " access token",
        }
    
        const response = await axios.delete(`http://localhost:8080/api/boards/` + boardUID, { headers: headers }).then((response) => {
            console.log('status :' + response.status);
        }).catch((err) => {
            alert("삭제에 실패하였습니다.");
            console.log('error :' + err);
        });
    }    
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <>
            <h2 align="center">게시글 상세정보</h2>
            <div>
                <button className="voc-view-go-delete-btn" 
                onClick={()=>{deleteSubmit()
                        alert("삭제되었습니다.");
                        window.location.href="/board";
                    }}>삭제</button>
            </div>
            <div className="voc-view-wrapper">
                {
                    details && <>
                <div className="voc-view-row">
                    <label>게시글 번호</label>
                    <label>{details.uid}</label>
                </div>
                <div className="voc-view-row">
                    <label>제목</label>
                    <label>{details.title}</label>
                </div>
                <div className="voc-view-row">
                    <label>작성일</label>
                    <label>{details.insertTime}</label>
                </div>
                <div className="voc-view-row">
                    <label>내용</label>
                    <div>
                        {details.content}
                    </div>
                </div>
                </>
            }
            </div>
        </>
    )
}
export default BoardView;