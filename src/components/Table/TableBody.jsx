import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Avatar from "../ui/Avatar";

const TableRow = ({ data, index, statusColors = {}, view ,action=true}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/add/${data?.productCode || 1}`);
  };

  const handleView = () => {
    navigate(`/details`);
  };

  const handleDelete = () => {
    alert("Delete product");
    // delete logic here
  };

  const getCellStyle = (key, value) => {
    if (key === "status") {
      return `font-medium rounded-md ${
        statusColors[value] || "bg-gray-100 text-gray-800"
      }`;
    }
    return "text-secondary";
  };

  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      {Object.entries(data).map(([key, value]) => (
        <td
          key={key}
          className="whitespace-nowrap min-w-[100px] px-4 py-3 text-sm"
        >
          {key === "image" ? (
            <Avatar 
              name={data.name || data.Product || 'Product'} 
              category={data.category || 'Office Supplies'} 
              size="lg"
            />
          ) : (
            <span
              className={`px-2 py-1 rounded-full ${getCellStyle(key, value)}`}
            >
              {value}
            </span>
          )}
        </td>
      ))}

      {/* Action Buttons */}
      {action &&<td className="whitespace-nowrap min-w-[120px] px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-4">
          <FaEdit
            onClick={handleEdit}
            className="text-base cursor-pointer hover:text-blue-500 transition duration-200"
          />
          {view && (
            <FaEye
              onClick={handleView}
              className="text-base cursor-pointer hover:text-green-500 transition duration-200"
            />
          )}
          <MdDelete
            onClick={handleDelete}
            className="text-base cursor-pointer hover:text-red-500 transition duration-200"
          />
        </div>
      </td>}
    </tr>
  );
};

export default TableRow;
