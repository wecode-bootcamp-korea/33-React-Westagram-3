import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [idInput, setIdInput] = useState();
  const [pwInput, setPwInput] = useState();
  const [disabled, setdisabled] = useState(true);
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/Signup-haeun');
  };

  const goToMain = () => {
    navigate('/main-haeun');
    fetch('http://10.58.3.39:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  // const goToMain = () => {
  //   navigate('/main-haeun');
  //   fetch('http://10.58.3.39:8000/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: idInput,
  //       password: pwInput,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.TOKEN) {
  //         localStorage.setItem('token', result.TOKEN);
  //         navigate('/main-haeun');
  //       }
  //     });
  // };

  // const signup = () => {
  //   navigate('/main-haeun');
  // };

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };

  const handlePwInput = e => {
    setPwInput(e.target.value);
  };

  const onBtnActive = () => {
    idInput.includes('@') && pwInput.length > 5
      ? setdisabled(false)
      : setdisabled(true);
  };

  return (
    <main className="loginContainer">
      <h1>westagram</h1>
      <form>
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
          onKeyUp={onBtnActive}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
          onKeyUp={onBtnActive}
        />
        <button disabled={disabled} onClick={goToMain}>
          로그인
        </button>
        <button onClick={goToSignUp}>회원가입</button>
      </form>
      <p>
        <img src="" alt="" />
        <span>Facebook으로 로그인</span>
      </p>
      <p>비밀번호를 잊으셨나요?</p>
    </main>
  );
}

export default Login;
