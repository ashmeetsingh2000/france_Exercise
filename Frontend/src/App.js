import './App.css';

import LoginPage from './Components/LoginPage';
import AdminPage from './Components/AdminPage'
import CustomerPage from './Components/CustomerPage'
import CustomerContract from './Components/CustomerContract';
import ContractPreview from './Components/ContractPreview';
import NewCustomer from './Components/NewCustomer';
import CustomerDetail from './Components/CustomerDetail';
import CustomerDetailEdit from './Components/CustomerDetailEdit';
import ContractDetail from './Components/ContractDetail';

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
          <Route path="/admin/customer" element={isAuthenticated ? <NewCustomer /> : <><Navigate to="/" replace /></>} />
          <Route path="/admin/customer-detail" element={isAuthenticated ? <CustomerDetail /> : <><Navigate to="/" replace /></>} />
          <Route path="/admin/customer-detail-edit" element={isAuthenticated ? <CustomerDetailEdit /> : <><Navigate to="/" replace /></>} />
          <Route path="/admin/contract-detail" element={isAuthenticated ? <ContractDetail /> : <><Navigate to="/" replace /></>} />
          <Route path="/customer" element={isAuthenticated ? <CustomerPage /> : <><Navigate to="/" replace /></>} />
          <Route path="/customer/contract" element={isAuthenticated ? <CustomerContract /> : <><Navigate to="/" replace /></>} />
          <Route path="/customer/contract-preview" element={isAuthenticated ? <ContractPreview /> : <><Navigate to="/" replace /></>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
