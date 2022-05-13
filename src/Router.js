import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// chulhye's component
import LoginChulhye from './pages/chulhye/Login/Login';
import MainChulhye from './pages/chulhye/Main/Main';

// // hyesu's component
// import LoginHyesu from './pages/hyesu/Login/Login';
// import MainHyesu from './pages/hyesu/Main/Main';

// // haeun's component
// import LoginHaeun from './pages/haeun/Login/Login';
// import MainHaeun from './pages/haeun/Main/Main';

// // eunbyul's compornent
// import LoginEunbyul from './pages/eunbyul/Login/Login';
// import MainEunbyul from './pages/eunbyul/Main/Main';

// // seongju's component
// import LoginSeongju from './pages/seongju/Login/Login';
// import MainSeongju from './pages/seongju/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-chulhye" element={<LoginChulhye />} />
        <Route path="/main-chulhye" element={<MainChulhye />} />
        {/* <Route path="/login-hyesu" element={<LoginHyesu />} />
        <Route path="/main-hyesu" element={<MainHyesu />} />
        <Route path="/login-haeun" element={<LoginHaeun />} />
        <Route path="/main-haeun" element={<MainHaeun />} />
        <Route path="/login-eunbyul" element={<LoginEunbyul />} />
        <Route path="/main-eunbyul" element={<MainEunbyul />} />
        <Route path="/login-seongju" element={<LoginSeongju />} />
        <Route path="/main-seongju" element={<MainSeongju />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
