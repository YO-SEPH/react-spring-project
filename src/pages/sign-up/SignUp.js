import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../sign-in/Login.css'


const CreateUserSubmit = async ({ body }) => {
    const response = await axios.post(`http://localhost:8080/user/signup`, body, { headers: headers }).then((response) => {
        // alert("등록되었습니다.");
        console.log('status :' + response.status);
    }).catch((err) => {
        alert("회원가입에 실패하였습니다.");
        console.log('error :' + err);
    });
}

function SignUp() {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState("");
const navigate = useNavigate();

  const body = {
    username : username,
    email : email,
    password : password,        
    // cofirmPassword : cofirmPassword
}

  return (
      <div className="loginregister">
            <form>
            <div>
                {/* <label>이름</label> */}
                <input type="text"
                       name="username"
                       placeholder='이름'
                       className="loginregister__input" 
                       onChange={(event) => setUsername(event.currentTarget.value)}>
                </input>
            </div>
            <div>
                {/* <label>이메일</label> */}
                <input placeholder='이메일'
                       type="email"
                       name="email"
                       className="loginregister__input" 
                       onChange={(event) => setEmail(event.currentTarget.value)}>
                </input>
            </div>
            <div>
                {/* <label>비밀번호</label> */}
                <input type="password"
                       name="password"
                       placeholder='비밀번호'
                    //    value={password}
                       className="loginregister__input" 
                       onChange={(event) => setPassword(event.currentTarget.value)}>
                </input>
            </div>
            <div>
            <button className="loginregister__button"
                    type='submit'
                    onClick={() => {CreateUserSubmit({ body }) 
                            alert("회원가입 되었습니다.");
                            }}>계정 생성하기</button>
            </div>
        </form>
            <div className='page-mainlink2' onClick={() =>navigate('/login')}>
                    로그인페이지로 이동
            </div>
        </div>                                                                                                                                                                                                                              
  );
}
export default SignUp;
