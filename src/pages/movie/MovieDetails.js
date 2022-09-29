import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../../component/movie/Movie';

function MovieDetails(){
    const { title } = useParams();
    const { state } = useLocation(); 
    const navigate  = useNavigate();
    
    return(
        <div className='page-containar'
        style={{maxWidth:"1400px", margin:"0 auto", padding:"32px 0"}}>
            <div style={{display:'flex'}}>
                <img
                style={{width:"300px", height:"450px"}}
                src={IMG_BASE_URL+ state.poster_path}
                alt="영화 포스터 페이지"
                />
                <div>
                    <div style={{fontSize:"40px", marginLeft:"70px", marginTop:"30px"}}>{title}</div>
                    <div style={{fontSize:"30px", marginLeft:"70px", marginTop:"50px"}}>{state.overview}</div>
                    <div style={{fontSize:"30px", marginLeft:"70px", marginTop:"50px"}}>평점 : {state.vote_average}</div>
                    <div style={{fontSize:"30px", marginLeft:"70px", marginTop:"50px", lineHeight:"14px", cursor:"pointer", color:"red", 
                                textDecorationLine:"underline"}} 
                         onClick={() =>navigate('/movie')}>돌아가기</div>
                </div>
            </div>
        </div>
    )
}
export default MovieDetails;