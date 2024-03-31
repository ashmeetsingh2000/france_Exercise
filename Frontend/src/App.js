import './App.css';
import LoginPage from './Components/LoginPage';
import AdminPage from './Components/AdminPage'
import CustomerPage from './Components/CustomerPage'
import NoPage from './Components/NoPage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import FixedTopBar from './Components/FixedTopBar';
function App() {
  const { isAuthenticated, authTo } = useSelector((state) => state.auth);
  return (
    <>
      <FixedTopBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={isAuthenticated ? <AdminPage /> : <><Navigate to="/" replace /></>} />
          <Route path="/customer" element={isAuthenticated ? <CustomerPage /> : <><Navigate to="/" replace /></>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
