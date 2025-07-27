const TableRow = ({ data, index, statusColors = {} }) => {
  const getCellStyle = (key, value) => {
    if (key === 'status') {
      return `font-medium rounded-md ${statusColors[value] || 'bg-gray-100 text-gray-800'}`;
    }
    return 'text-gray-900';
  };

  return (
    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
      {Object.entries(data).map(([key, value]) => (
        <td 
          key={key}
          className={`px-6 py-4`}
        >
          
          <span className={`whitespace-nowrap text-sm px-2 py-1 rounded-full ${getCellStyle(key, value)}`}>{value}</span>
        </td>
      ))}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">***</td>
    </tr>
  );
};

export default TableRow;