import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({ id: '', password: '' });

  const { id, password } = userInput;
  const isInputValid = id.includes('@') && password.length >= 5;

  const handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const goToMain = () => {
    fetch('http://10.58.4.207:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          localStorage.setItem('login-token', response.access_token);
          navigate('/main-seongju');
        }
      });
  };

  return (
    <main className="loginMain">
      <div className="loginWrapper">
        <p className="loginTitle">Westagram</p>
        <input
          name="id"
          type="text"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleInput}
        />
        <input
          name="password"
          type="password"
          className="password"
          placeholder="비밀번호"
          onChange={handleInput}
        />
        <button
          type="submit"
          className="loginButton"
          disabled={!isInputValid}
          onClick={goToMain}
        >
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
