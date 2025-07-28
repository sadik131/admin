import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TableRow = ({ data, index, statusColors = {} }) => {
  const navigate = useNavigate();

  const handleClick = (id = 1) => {
    navigate(`/add/1`);
  }

  const handleView = (productCode) => {
    console.log("View clicked:", productCode);
    // navigate(`/view-product/${productCode}`);
  };

  const handleDelete = (productCode) => {
    console.log("Delete clicked:", productCode);
    // delete logic
  };

  const getCellStyle = (key, value) => {
    if (key === 'status') {
      return `font-medium rounded-md ${statusColors[value] || 'bg-gray-100 text-gray-800'}`;
    }
    return 'text-gray-900';
  };

  return (
    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
      {Object.entries(data).map(([key, value]) => (
        <td key={key} className="px-6 py-4">
          {key === 'image' ? (
            <img
              src={value}
              alt="product"
              className="w-12 h-12 object-cover rounded-md"
            />
          ) : (
            <span className={`whitespace-nowrap text-sm px-2 py-1 rounded-full ${getCellStyle(key, value)}`}>
              {value}
            </span>
          )}
        </td>
      ))}

      <td className="text-center align-middle px-4 py-2 text-gray-500">
        <div className="flex items-center justify-center gap-4">
          <FaEdit
            onClick={() => handleClick(data.productCode)}
            className="text-base cursor-pointer hover:text-blue-500 transition duration-200"
          />
          <FaEye
            onClick={() => handleClick(data.productCode)}
            className="text-base cursor-pointer hover:text-green-500 transition duration-200"
          />
          <MdDelete
            onClick={() => handleClick(data.productCode)}
            className="text-base cursor-pointer hover:text-red-500 transition duration-200"
          />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;