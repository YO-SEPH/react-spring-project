import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './BoardCreate.css';


const HandleQuestionSubmit = async ({ body }) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': " access token",
    }


    const response = await axios.post(`http://localhost:8080/api/boards`, body, { headers: headers }).then((response) => {
        // alert("등록되었습니다.");
        console.log('status :' + response.status);
    }).catch((err) => {
        alert("등록에 실패하였습니다.");
        console.log('error :' + err);
    });
}

function BoardCreate() {

    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');
    // const [insertTime, setInserTime] = useState('');

    const body = {
        title: title,
        content: content,
        writer: writer,
        // insertTime: insertTime,
    }

    return (<>
        <h2 align="center">게시글 작성</h2>
        <div className="voc-view-wrapper">
            {/* <div className="voc-view-row">
                <label>날짜</label>
                <input onChange={(event) => setInserTime(event.target.value)}></input>
            </div> */}
            <div className="voc-view-row">
                <label>제목</label>
                <input onChange={(event) => setTitle(event.target.value)}></input>
            </div>
            <div className="voc-view-row">
                <label>이름</label>
                <input onChange={(event) => setWriter(event.target.value)}></input>
            </div>
            <div className="voc-view-row">
                <label>내용</label>
                <textarea onChange={(event) => setContent(event.target.value)}></textarea>
            </div>
            <button className="voc-view-go-list-btn" 
            onClick={() => {HandleQuestionSubmit({ body }) 
                            alert("등록되었습니다.");
                            window.location.href="/board";}}>등록</button>
        </div>
    </>);
}

export default BoardCreate;

{/* -------------------------------------------------------------------------------------------------------- */ }
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                            <button type="button" class="btn btn-primary" onClick={() => HandleQuestionSubmit({ body })} >등록</button>
                        </div>
                    </div>
                </div>
            </div> */}
