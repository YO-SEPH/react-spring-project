import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFound.css'

function NotFound() {

    const navigate = useNavigate();

    return (
        <div className='page-container'>
            <div className='page-page'>
                해당페이지를 찾지 못했습니다.
            </div>
            <div className='page-address'>
                주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
            </div>
            <div className='page-mainlink' onClick={() =>navigate('/home')}>
                메인페이지로 이동
            </div>
        </div>
    )

}
export default NotFound;