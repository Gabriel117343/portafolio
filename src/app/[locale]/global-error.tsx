"use client";
import React from "react";

import "./globals.css";

const GlobalError = () => {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h screen">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
