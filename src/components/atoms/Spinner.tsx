import React from "react";

const Spinner = React.memo(() => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-slate-200 border-t-slate-600" />
    </div>
  );
});

export default Spinner;
