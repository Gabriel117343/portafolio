import React from "react";

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center mt-10">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <span className="text-lg font-medium text-gray-700">
          Cargando el Proyecto...
        </span>
      </div>
    </div>
  );
};

export default Loading;
