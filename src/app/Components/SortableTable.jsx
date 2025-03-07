
import Image from "next/image";
"use client";
import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";
iimport { FaSort } from "react-icons/fa";
import Image from "next/image";

import Image from "next/image";
const SortableTable = () => {
import Image from "next/image";
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
import Image from "next/image";
  const [selectedRows, setSelectedRows] = useState([]);
import Image from "next/image";

import Image from "next/image";
  const initialData = [
import Image from "next/image";
    { id: 1, description: "Resume Making", paymentBy: "Stripe", amount: 2897, customerId: 26, paymentDate: "6/3/22" },
import Image from "next/image";
    { id: 2, description: "Resume Making", paymentBy: "Paypal", amount: 9387, customerId: 35, paymentDate: "12/2/22" },
import Image from "next/image";
    { id: 3, description: "Job Applied", paymentBy: "Paypal", amount: 402, customerId: 48, paymentDate: "4/19/23" },
import Image from "next/image";
    { id: 4, description: "Job Applied", paymentBy: "Paypal", amount: 276, customerId: 90, paymentDate: "1/2/23" },
import Image from "next/image";
    { id: 5, description: "Job Applied", paymentBy: "Stripe", amount: 276, customerId: 67, paymentDate: "9/4/23" },
import Image from "next/image";
    { id: 6, description: "Resume Making", paymentBy: "Stripe", amount: 1098, customerId: 35, paymentDate: "6/3/22" },
import Image from "next/image";
    { id: 7, description: "Job Applied", paymentBy: "Stripe", amount: 4298, customerId: 48, paymentDate: "12/2/22" },
import Image from "next/image";
    { id: 8, description: "Resume Making", paymentBy: "Stripe", amount: 1928, customerId: 90, paymentDate: "4/19/23" },
import Image from "next/image";
    { id: 9, description: "Resume Making", paymentBy: "Stripe", amount: 640, customerId: 67, paymentDate: "1/2/23" },
import Image from "next/image";
  ];
import Image from "next/image";

import Image from "next/image";
  const [data, setData] = useState(initialData);
import Image from "next/image";

import Image from "next/image";
  const handleSort = (key) => {
import Image from "next/image";
    let direction = "asc";
import Image from "next/image";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
import Image from "next/image";
      direction = "desc";
import Image from "next/image";
    }
import Image from "next/image";

import Image from "next/image";
    const sortedData = [...data].sort((a, b) => {
import Image from "next/image";
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
import Image from "next/image";
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
import Image from "next/image";
      return 0;
import Image from "next/image";
    });
import Image from "next/image";

import Image from "next/image";
    setSortConfig({ key, direction });
import Image from "next/image";
    setData(sortedData);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const handleCheckboxChange = (id) => {
import Image from "next/image";
    setSelectedRows((prevSelected) =>
import Image from "next/image";
      prevSelected.includes(id)
import Image from "next/image";
        ? prevSelected.filter((rowId) => rowId !== id)
import Image from "next/image";
        : [...prevSelected, id]
import Image from "next/image";
    );
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="bg-green-100 p-4 md:p-6 rounded-xl w-full mx-auto mt-6 shadow-lg">
import Image from "next/image";
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-4 uppercase tracking-wider">
import Image from "next/image";
        Details
import Image from "next/image";
      </h2>
import Image from "next/image";

import Image from "next/image";
      {/* Responsive Table Container */}
import Image from "next/image";
      <div className="overflow-x-auto">
import Image from "next/image";
        <table className="w-full bg-white rounded-xl overflow-hidden shadow-md">
import Image from "next/image";
          <thead className="bg-green-200 text-gray-700">
import Image from "next/image";
            <tr>
import Image from "next/image";
              <th className="p-2 md:p-3"></th> {/* Checkbox Column */}
import Image from "next/image";
              {["description", "paymentBy", "amount", "customerId", "paymentDate"].map((key) => (
import Image from "next/image";
                <th key={key} className="p-2 md:p-3 text-left">
import Image from "next/image";
                  <button
import Image from "next/image";
                    onClick={() => handleSort(key)}
import Image from "next/image";
                    className="bg-white px-2 md:px-3 py-1 rounded-lg shadow-md flex items-center space-x-2 text-sm md:text-base"
import Image from "next/image";
                  >
import Image from "next/image";
                    <span className="capitalize font-semibold">
import Image from "next/image";
                      {key.replace(/([A-Z])/g, " $1")}
import Image from "next/image";
                    </span>
import Image from "next/image";
                    <FaSort className="text-xs md:text-sm" />
import Image from "next/image";
                  </button>
import Image from "next/image";
                </th>
import Image from "next/image";
              ))}
import Image from "next/image";
              <th className="p-2 md:p-3 text-left font-semibold">Options</th>
import Image from "next/image";
            </tr>
import Image from "next/image";
          </thead>
import Image from "next/image";
          <tbody>
import Image from "next/image";
            {data.map((item) => (
import Image from "next/image";
              <tr key={item.id} className="text-gray-800 hover:bg-gray-100 transition">
import Image from "next/image";
                <td className="p-2 md:p-3 text-center">
import Image from "next/image";
                  <label className="cursor-pointer relative">
import Image from "next/image";
                    <input
import Image from "next/image";
                      type="checkbox"
import Image from "next/image";
                      checked={selectedRows.includes(item.id)}
import Image from "next/image";
                      onChange={() => handleCheckboxChange(item.id)}
import Image from "next/image";
                      className="hidden"
import Image from "next/image";
                    />
import Image from "next/image";
                    <span
import Image from "next/image";
                      className={`w-4 h-4 md:w-5 md:h-5 inline-block rounded-full border-2 border-gray-500 transition-all duration-200 ${
import Image from "next/image";
                        selectedRows.includes(item.id)
import Image from "next/image";
                          ? "bg-green-300 border-green-300 shadow-md"
import Image from "next/image";
                          : "bg-white"
import Image from "next/image";
                      }`}
import Image from "next/image";
                    ></span>
import Image from "next/image";
                  </label>
import Image from "next/image";
                </td>
import Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.description}</td>
import Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.paymentBy}</td>
import Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.amount.toLocaleString()}</td>
import Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.customerId}</td>
import Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.paymentDate}</td>
import Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">...</td>
import Image from "next/image";
              </tr>
import Image from "next/image";
            ))}
import Image from "next/image";
          </tbody>
import Image from "next/image";
        </table>
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default SortableTable;