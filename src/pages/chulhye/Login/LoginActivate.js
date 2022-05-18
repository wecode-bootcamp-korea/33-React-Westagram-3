import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginActivate = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    fetch('http://10.58.3.156:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        user_email: idInput,
        password: pwdInput,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과: ', result);
        if (result.Token) {
          localStorage.setItem('token', result.Token);
        }
      });

    navigate('/main-chulhye');
  };
  const [idInput, setIdInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');
  const [loginActive, setActive] = useState(false);

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };
  const handlePwdInput = e => {
    setPwdInput(e.target.value);
  };

  const loginActivate = () => {
    return idInput.includes('@') && pwdInput.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  return (
    <>
      <input
        type="text"
        className="inputId"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={handleIdInput}
        onKeyUp={loginActivate}
      />
      <input
        type="password"
        className="inputPassword"
        placeholder="비밀번호"
        onChange={handlePwdInput}
        onKeyUp={loginActivate}
      />
      <button
        className={loginActive ? 'loginBtn activate' : 'loginBtn'}
        onClick={goToMain}
      >
        로그인
      </button>
    </>
  );
};

export default LoginActivate;
