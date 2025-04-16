import React, { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-screen bg-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="m-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Toggle Slide
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Sliding Panel</h2>
          <p>This panel slides in from the left!</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
