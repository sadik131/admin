import Sidebar from './components/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard/Dashboard.jsx';
import AddProduct from './page/ProductPage/AddProduct.jsx';
import AllProduct from './page/ProductPage/AllProduct.jsx';
import Details from './page/DetailsPage/Details.jsx';

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
