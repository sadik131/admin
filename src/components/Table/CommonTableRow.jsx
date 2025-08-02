import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Counter from "../layout/Counter";

const CommonTableRow = ({ data, index, fields, imageField, nameField, statusColors = {}, view }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/add/${data?.productCode || 1}`);
  };

  const handleView = () => {
    navigate(`/details`);
  };

  const handleDelete = () => {
    alert("Delete product");
  };

  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      {fields.map((field, i) => (
        <td key={i} className="whitespace-nowrap text-sm px-6 py-4">
          {field === imageField ? (
            <div className="flex items-center gap-1">
              <img src={data[imageField]} alt="" className="h-8 w-8 rounded-lg" />
              {data[nameField]}
            </div>
          ) : field === 'qty' ? (
            <Counter />
          ) : (
            data[field]
          )}
        </td>
      ))}
      <td className="text-center align-middle px-4 py-2 text-primary">
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
      </td>
    </tr>
  );
};

export default CommonTableRow;
