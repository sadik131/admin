import React from 'react';
import AddUser from './page/AddUser.jsx';
import ExamResults from './page/ExamResults.jsx';
import Expenses from './page/Expenses.jsx';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#646464] gap-4">
     {/* <AddUser /> */}
     <ExamResults />
     <Expenses />
    </div>
  );
};

export default App;
