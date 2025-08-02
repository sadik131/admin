const Table = ({ headers, children }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full min-w-max divide-y divide-gray-200 text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
