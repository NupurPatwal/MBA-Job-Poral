
import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";
iimport { FaSortUp, FaSortDown, FaDownload } from "react-icons/fa";
import Image from "next/image";
iimport jsPDF from "jspdf";
import Image from "next/image";

import Image from "next/image";
const Reports = () => {
import Image from "next/image";
  const [isAscending, setIsAscending] = useState(true);
import Image from "next/image";

import Image from "next/image";
  // Sample Revenue Data
import Image from "next/image";
  const revenueData = {
import Image from "next/image";
    monthRevenue: "₹50,000",
import Image from "next/image";
    lastMonthRevenue: "₹45,000",
import Image from "next/image";
    growthRate: "+15%",
import Image from "next/image";
    subscriptionRevenue: "₹30,000",
import Image from "next/image";
    oneTimePayments: "₹20,000",
import Image from "next/image";
    pendingAmount: "₹10,000",
import Image from "next/image";
    overduePayments: "₹5,000",
import Image from "next/image";
    highestEarningMonth: "July ₹80,000",
import Image from "next/image";
    lowestEarningMonth: "January ₹30,000",
import Image from "next/image";
    jobPostingRevenue: "₹20,000",
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  // Toggle sorting order
import Image from "next/image";
  const toggleSort = () => {
import Image from "next/image";
    setIsAscending(!isAscending);
import Image from "next/image";
  };
import Image from "next/image";

import Image from "next/image";
  const downloadReport = () => {
import Image from "next/image";
    const doc = new jsPDF();
import Image from "next/image";
    doc.text("Reports Dashboard", 20, 20);
import Image from "next/image";
    doc.text(`Month’s Revenue: ${revenueData.monthRevenue}`, 20, 30);
import Image from "next/image";
    doc.text(`Last Month’s Revenue: ${revenueData.lastMonthRevenue}`, 20, 40);
import Image from "next/image";
    doc.text(`Growth Rate: ${revenueData.growthRate}`, 20, 50);
import Image from "next/image";
    doc.text(`Subscription Revenue: ${revenueData.subscriptionRevenue}`, 20, 60);
import Image from "next/image";
    doc.text(`One-Time Payments: ${revenueData.oneTimePayments}`, 20, 70);
import Image from "next/image";
    doc.text(`Pending Amount: ${revenueData.pendingAmount}`, 20, 80);
import Image from "next/image";
    doc.text(`Overdue Payments: ${revenueData.overduePayments}`, 20, 90);
import Image from "next/image";
    doc.text(`Highest Earning Month: ${revenueData.highestEarningMonth}`, 20, 100);
import Image from "next/image";
    doc.text(`Lowest Earning Month: ${revenueData.lowestEarningMonth}`, 20, 110);
import Image from "next/image";
    doc.text(`Job Posting Revenue: ${revenueData.jobPostingRevenue}`, 20, 120);
import Image from "next/image";
    doc.save("JobPortal_Report.pdf");
import Image from "next/image";
  };  
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
import Image from "next/image";
      <div className="bg-white shadow-md p-4 md:p-6 rounded-lg">
import Image from "next/image";
        
import Image from "next/image";
        {/* Header */}
import Image from "next/image";
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
import Image from "next/image";
          <h1 className="text-xl md:text-2xl font-semibold mb-4 sm:mb-0">Reports</h1>
import Image from "next/image";
          <button
import Image from "next/image";
            onClick={downloadReport}
import Image from "next/image";
            className="flex items-center bg-green-500 text-white px-3 py-2 md:px-4 md:py-2 rounded hover:bg-green-600 text-sm md:text-base"
import Image from "next/image";
          >
import Image from "next/image";
            <FaDownload className="mr-2" /> Download Report (PDF)
import Image from "next/image";
          </button>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Reports Dashboard */}
import Image from "next/image";
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
import Image from "next/image";
          <div className="bg-gray-200 p-4 rounded-lg text-sm md:text-base">
import Image from "next/image";
            <p>📌 <b>Total Jobs Posted:</b> 500</p>
import Image from "next/image";
            <p>🏆 <b>Total Applicants:</b> 1,200</p>
import Image from "next/image";
            <p>❌ <b>Rejected Applications:</b> 300</p>
import Image from "next/image";
            <p>📜 <b>Active Subscriptions:</b> 120 Paid</p>
import Image from "next/image";
          </div>
import Image from "next/image";
          <div className="bg-gray-200 p-4 rounded-lg text-sm md:text-base">
import Image from "next/image";
            <p>📌 <b>Total Job Applications:</b> 12,500</p>
import Image from "next/image";
            <p>✅ <b>Accepted Applications:</b> 8,000</p>
import Image from "next/image";
            <p>❌ <b>Rejected Applications:</b> 3,500</p>
import Image from "next/image";
            <p>⏳ <b>Pending Applications:</b> 1,000</p>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";

import Image from "next/image";
        {/* Payment & Revenue Reports */}
import Image from "next/image";
        <div className="bg-white shadow-md p-4 md:p-6 rounded-lg">
import Image from "next/image";
          <h2 className="text-lg md:text-xl font-semibold mb-4">Payment & Revenue Reports</h2>
import Image from "next/image";
          
import Image from "next/image";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
import Image from "next/image";
            
import Image from "next/image";
            {/* Total Revenue Generated */}
import Image from "next/image";
            <div>
import Image from "next/image";
              <h3 className="text-md md:text-lg font-semibold mb-2 flex items-center">
import Image from "next/image";
                Total Revenue Generated
import Image from "next/image";
                <button onClick={toggleSort} className="ml-2">
import Image from "next/image";
                  {isAscending ? <FaSortUp /> : <FaSortDown />}
import Image from "next/image";
                </button>
import Image from "next/image";
              </h3>
import Image from "next/image";
              <p>📈 <b>Month’s Revenue:</b> {isAscending ? revenueData.monthRevenue : revenueData.lastMonthRevenue}</p>
import Image from "next/image";
              <p>📊 <b>Growth Rate:</b> {revenueData.growthRate}</p>
import Image from "next/image";
              <p>📆 <b>Last Month’s Revenue:</b> {revenueData.lastMonthRevenue}</p>
import Image from "next/image";
              <p>💳 <b>Subscription Revenue:</b> {revenueData.subscriptionRevenue}</p>
import Image from "next/image";
              <p>💰 <b>One-Time Payments:</b> {revenueData.oneTimePayments}</p>
import Image from "next/image";
            </div>
import Image from "next/image";

import Image from "next/image";
            {/* Pending Payments & Month Report */}
import Image from "next/image";
            <div>
import Image from "next/image";
              <h3 className="text-md md:text-lg font-semibold mb-2">Pending Payments & Month Report</h3>
import Image from "next/image";
              <p>⏳ <b>Total Pending Amount:</b> {revenueData.pendingAmount}</p>
import Image from "next/image";
              <p>🚨 <b>Overdue Payments (30+ Days):</b> {revenueData.overduePayments}</p>
import Image from "next/image";
              <p>🏆 <b>Highest Earning Month:</b> {revenueData.highestEarningMonth}</p>
import Image from "next/image";
              <p>📉 <b>Lowest Earning Month:</b> {revenueData.lowestEarningMonth}</p>
import Image from "next/image";
              <p>📋 <b>Job Posting Revenue:</b> {revenueData.jobPostingRevenue}</p>
import Image from "next/image";
            </div>
import Image from "next/image";

import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
        
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
export default Reports;