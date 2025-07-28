import React from 'react';
import AddUser from './page/AddUser.jsx';
import ExamResults from './page/ExamResults.jsx';
import Expenses from './page/Expenses.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard.jsx';
import AddProduct from './page/AddProduct.jsx';
import AllProduct from './page/AllProduct.jsx';
import Details from './page/Details.jsx';

const App = () => {
  return (
    <>
      <div className='flex flex-row'>
        <Sidebar />
        {/* Main content area */}
        <div className="p-6 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/add/:productCode" element={<AddProduct />} />
            <Route path="/details" element={<Details />} />
            <Route path="/all" element={<AllProduct />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
