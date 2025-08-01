import { Route, Routes } from 'react-router-dom';
import AddProduct from './page/Product/AddProduct.jsx';
import AllProduct from './page/Product/AllProduct.jsx';
import Details from './page/Product/ProductDetails.jsx';
import UpdateProduct from './page/Product/UpdateProduct.jsx';
import Button from './components/ui/SkuInput.jsx';
import DashBoard from './page/dashboard/Dashboard.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import ExpiredProduct from './page/product/ExpiredProduct.jsx';
import LowStock from './page/product/LowStock.jsx';
import Category from './page/product/Category.jsx';
import PrintQR from './page/product/PrintQR.jsx';

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
            <Route path="/expire" element={<ExpiredProduct />} />
            <Route path="/stocks" element={<LowStock />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/QR" element={<PrintQR />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
