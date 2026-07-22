import React from "react";

const Spinner = React.memo(() => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
    </div>
  );
});

export default Spinner;
