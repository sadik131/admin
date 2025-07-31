import Sidebar from './components/Layout/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './page/Product/AddProduct.jsx';
import AllProduct from './page/Product/AllProduct.jsx';
import Details from './page/Product/ProductDetails.jsx';
import UpdateProduct from './page/Product/UpdateProduct.jsx';
import Button from './components/ui/SkuInput.jsx';
import DashBoard from './page/dashboard/Dashboard.jsx';

const App = () => {
  return (
    <>
      <div className='flex flex-row font-roboto'>
        <Sidebar />
        {/* Main content area */}
        <div className="w-full">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/add/:productCode" element={<UpdateProduct />} />
            <Route path="/details" element={<Details />} />
            <Route path="/all" element={<AllProduct />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
