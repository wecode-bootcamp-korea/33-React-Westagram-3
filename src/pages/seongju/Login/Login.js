import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-seongju');
  };

  const handleIdInput = event => {
    setValue(event.target.value);
    console.log(event.value);
  };

  return (
    <main className="loginMain">
      <div className="loginWrapper">
        <p className="loginTitle">Westagram</p>
        <input
          type="text"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input type="password" className="password" placeholder="비밀번호" />
        <button type="submit" className="loginButton" onClick={goToMain}>
          로그인
        </button>
        <span id="passwordForget">
          <Link to="/main-seongju">비밀번호를 잊으셨나요?</Link>
        </span>
      </div>
    </main>
  );
}

export default Login;
