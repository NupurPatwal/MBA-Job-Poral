
mport Image from "next/image";
"use client";
mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";
import { FaSort } from "react-icons/fa";
mport Image from "next/image";

mport Image from "next/image";
const SortableTable = () => {
mport Image from "next/image";
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
mport Image from "next/image";
  const [selectedRows, setSelectedRows] = useState([]);
mport Image from "next/image";

mport Image from "next/image";
  const initialData = [
mport Image from "next/image";
    { id: 1, description: "Resume Making", paymentBy: "Stripe", amount: 2897, customerId: 26, paymentDate: "6/3/22" },
mport Image from "next/image";
    { id: 2, description: "Resume Making", paymentBy: "Paypal", amount: 9387, customerId: 35, paymentDate: "12/2/22" },
mport Image from "next/image";
    { id: 3, description: "Job Applied", paymentBy: "Paypal", amount: 402, customerId: 48, paymentDate: "4/19/23" },
mport Image from "next/image";
    { id: 4, description: "Job Applied", paymentBy: "Paypal", amount: 276, customerId: 90, paymentDate: "1/2/23" },
mport Image from "next/image";
    { id: 5, description: "Job Applied", paymentBy: "Stripe", amount: 276, customerId: 67, paymentDate: "9/4/23" },
mport Image from "next/image";
    { id: 6, description: "Resume Making", paymentBy: "Stripe", amount: 1098, customerId: 35, paymentDate: "6/3/22" },
mport Image from "next/image";
    { id: 7, description: "Job Applied", paymentBy: "Stripe", amount: 4298, customerId: 48, paymentDate: "12/2/22" },
mport Image from "next/image";
    { id: 8, description: "Resume Making", paymentBy: "Stripe", amount: 1928, customerId: 90, paymentDate: "4/19/23" },
mport Image from "next/image";
    { id: 9, description: "Resume Making", paymentBy: "Stripe", amount: 640, customerId: 67, paymentDate: "1/2/23" },
mport Image from "next/image";
  ];
mport Image from "next/image";

mport Image from "next/image";
  const [data, setData] = useState(initialData);
mport Image from "next/image";

mport Image from "next/image";
  const handleSort = (key) => {
mport Image from "next/image";
    let direction = "asc";
mport Image from "next/image";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
mport Image from "next/image";
      direction = "desc";
mport Image from "next/image";
    }
mport Image from "next/image";

mport Image from "next/image";
    const sortedData = [...data].sort((a, b) => {
mport Image from "next/image";
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
mport Image from "next/image";
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
mport Image from "next/image";
      return 0;
mport Image from "next/image";
    });
mport Image from "next/image";

mport Image from "next/image";
    setSortConfig({ key, direction });
mport Image from "next/image";
    setData(sortedData);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const handleCheckboxChange = (id) => {
mport Image from "next/image";
    setSelectedRows((prevSelected) =>
mport Image from "next/image";
      prevSelected.includes(id)
mport Image from "next/image";
        ? prevSelected.filter((rowId) => rowId !== id)
mport Image from "next/image";
        : [...prevSelected, id]
mport Image from "next/image";
    );
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="bg-green-100 p-4 md:p-6 rounded-xl w-full mx-auto mt-6 shadow-lg">
mport Image from "next/image";
      <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-4 uppercase tracking-wider">
mport Image from "next/image";
        Details
mport Image from "next/image";
      </h2>
mport Image from "next/image";

mport Image from "next/image";
      {/* Responsive Table Container */}
mport Image from "next/image";
      <div className="overflow-x-auto">
mport Image from "next/image";
        <table className="w-full bg-white rounded-xl overflow-hidden shadow-md">
mport Image from "next/image";
          <thead className="bg-green-200 text-gray-700">
mport Image from "next/image";
            <tr>
mport Image from "next/image";
              <th className="p-2 md:p-3"></th> {/* Checkbox Column */}
mport Image from "next/image";
              {["description", "paymentBy", "amount", "customerId", "paymentDate"].map((key) => (
mport Image from "next/image";
                <th key={key} className="p-2 md:p-3 text-left">
mport Image from "next/image";
                  <button
mport Image from "next/image";
                    onClick={() => handleSort(key)}
mport Image from "next/image";
                    className="bg-white px-2 md:px-3 py-1 rounded-lg shadow-md flex items-center space-x-2 text-sm md:text-base"
mport Image from "next/image";
                  >
mport Image from "next/image";
                    <span className="capitalize font-semibold">
mport Image from "next/image";
                      {key.replace(/([A-Z])/g, " $1")}
mport Image from "next/image";
                    </span>
mport Image from "next/image";
                    <FaSort className="text-xs md:text-sm" />
mport Image from "next/image";
                  </button>
mport Image from "next/image";
                </th>
mport Image from "next/image";
              ))}
mport Image from "next/image";
              <th className="p-2 md:p-3 text-left font-semibold">Options</th>
mport Image from "next/image";
            </tr>
mport Image from "next/image";
          </thead>
mport Image from "next/image";
          <tbody>
mport Image from "next/image";
            {data.map((item) => (
mport Image from "next/image";
              <tr key={item.id} className="text-gray-800 hover:bg-gray-100 transition">
mport Image from "next/image";
                <td className="p-2 md:p-3 text-center">
mport Image from "next/image";
                  <label className="cursor-pointer relative">
mport Image from "next/image";
                    <input
mport Image from "next/image";
                      type="checkbox"
mport Image from "next/image";
                      checked={selectedRows.includes(item.id)}
mport Image from "next/image";
                      onChange={() => handleCheckboxChange(item.id)}
mport Image from "next/image";
                      className="hidden"
mport Image from "next/image";
                    />
mport Image from "next/image";
                    <span
mport Image from "next/image";
                      className={`w-4 h-4 md:w-5 md:h-5 inline-block rounded-full border-2 border-gray-500 transition-all duration-200 ${
mport Image from "next/image";
                        selectedRows.includes(item.id)
mport Image from "next/image";
                          ? "bg-green-300 border-green-300 shadow-md"
mport Image from "next/image";
                          : "bg-white"
mport Image from "next/image";
                      }`}
mport Image from "next/image";
                    ></span>
mport Image from "next/image";
                  </label>
mport Image from "next/image";
                </td>
mport Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.description}</td>
mport Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.paymentBy}</td>
mport Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.amount.toLocaleString()}</td>
mport Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.customerId}</td>
mport Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">{item.paymentDate}</td>
mport Image from "next/image";
                <td className="p-2 md:p-3 text-sm md:text-base">...</td>
mport Image from "next/image";
              </tr>
mport Image from "next/image";
            ))}
mport Image from "next/image";
          </tbody>
mport Image from "next/image";
        </table>
mport Image from "next/image";
      </div>
mport Image from "next/image";
    </div>
mport Image from "next/image";
  );
mport Image from "next/image";
};
mport Image from "next/image";

mport Image from "next/image";
export default SortableTable;