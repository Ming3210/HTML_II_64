import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-slate-900 bg-opacity-50 z-50">
      <div className="flex space-x-2">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    </div>
  );
}
