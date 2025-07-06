import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/LoginComponent/Login';
import Home from './Components/HomeComponent/Home';
import Layout from './Components/LayoutComponent/Layout';

const App = () => {
  const isUserLogin = JSON.parse(localStorage.getItem("isLoggedIn"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {isUserLogin && (
          <Route path="/layouthome" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
