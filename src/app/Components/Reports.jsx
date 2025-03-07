
mport Image from "next/image";
import { useState } from "react";
mport Image from "next/image";
import { FaSortUp, FaSortDown, FaDownload } from "react-icons/fa";
mport Image from "next/image";
import jsPDF from "jspdf";
mport Image from "next/image";

mport Image from "next/image";
const Reports = () => {
mport Image from "next/image";
  const [isAscending, setIsAscending] = useState(true);
mport Image from "next/image";

mport Image from "next/image";
  // Sample Revenue Data
mport Image from "next/image";
  const revenueData = {
mport Image from "next/image";
    monthRevenue: "₹50,000",
mport Image from "next/image";
    lastMonthRevenue: "₹45,000",
mport Image from "next/image";
    growthRate: "+15%",
mport Image from "next/image";
    subscriptionRevenue: "₹30,000",
mport Image from "next/image";
    oneTimePayments: "₹20,000",
mport Image from "next/image";
    pendingAmount: "₹10,000",
mport Image from "next/image";
    overduePayments: "₹5,000",
mport Image from "next/image";
    highestEarningMonth: "July ₹80,000",
mport Image from "next/image";
    lowestEarningMonth: "January ₹30,000",
mport Image from "next/image";
    jobPostingRevenue: "₹20,000",
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  // Toggle sorting order
mport Image from "next/image";
  const toggleSort = () => {
mport Image from "next/image";
    setIsAscending(!isAscending);
mport Image from "next/image";
  };
mport Image from "next/image";

mport Image from "next/image";
  const downloadReport = () => {
mport Image from "next/image";
    const doc = new jsPDF();
mport Image from "next/image";
    doc.text("Reports Dashboard", 20, 20);
mport Image from "next/image";
    doc.text(`Month’s Revenue: ${revenueData.monthRevenue}`, 20, 30);
mport Image from "next/image";
    doc.text(`Last Month’s Revenue: ${revenueData.lastMonthRevenue}`, 20, 40);
mport Image from "next/image";
    doc.text(`Growth Rate: ${revenueData.growthRate}`, 20, 50);
mport Image from "next/image";
    doc.text(`Subscription Revenue: ${revenueData.subscriptionRevenue}`, 20, 60);
mport Image from "next/image";
    doc.text(`One-Time Payments: ${revenueData.oneTimePayments}`, 20, 70);
mport Image from "next/image";
    doc.text(`Pending Amount: ${revenueData.pendingAmount}`, 20, 80);
mport Image from "next/image";
    doc.text(`Overdue Payments: ${revenueData.overduePayments}`, 20, 90);
mport Image from "next/image";
    doc.text(`Highest Earning Month: ${revenueData.highestEarningMonth}`, 20, 100);
mport Image from "next/image";
    doc.text(`Lowest Earning Month: ${revenueData.lowestEarningMonth}`, 20, 110);
mport Image from "next/image";
    doc.text(`Job Posting Revenue: ${revenueData.jobPostingRevenue}`, 20, 120);
mport Image from "next/image";
    doc.save("JobPortal_Report.pdf");
mport Image from "next/image";
  };  
mport Image from "next/image";

mport Image from "next/image";
  return (
mport Image from "next/image";
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
mport Image from "next/image";
      <div className="bg-white shadow-md p-4 md:p-6 rounded-lg">
mport Image from "next/image";
        
mport Image from "next/image";
        {/* Header */}
mport Image from "next/image";
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
mport Image from "next/image";
          <h1 className="text-xl md:text-2xl font-semibold mb-4 sm:mb-0">Reports</h1>
mport Image from "next/image";
          <button
mport Image from "next/image";
            onClick={downloadReport}
mport Image from "next/image";
            className="flex items-center bg-green-500 text-white px-3 py-2 md:px-4 md:py-2 rounded hover:bg-green-600 text-sm md:text-base"
mport Image from "next/image";
          >
mport Image from "next/image";
            <FaDownload className="mr-2" /> Download Report (PDF)
mport Image from "next/image";
          </button>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Reports Dashboard */}
mport Image from "next/image";
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
mport Image from "next/image";
          <div className="bg-gray-200 p-4 rounded-lg text-sm md:text-base">
mport Image from "next/image";
            <p>📌 <b>Total Jobs Posted:</b> 500</p>
mport Image from "next/image";
            <p>🏆 <b>Total Applicants:</b> 1,200</p>
mport Image from "next/image";
            <p>❌ <b>Rejected Applications:</b> 300</p>
mport Image from "next/image";
            <p>📜 <b>Active Subscriptions:</b> 120 Paid</p>
mport Image from "next/image";
          </div>
mport Image from "next/image";
          <div className="bg-gray-200 p-4 rounded-lg text-sm md:text-base">
mport Image from "next/image";
            <p>📌 <b>Total Job Applications:</b> 12,500</p>
mport Image from "next/image";
            <p>✅ <b>Accepted Applications:</b> 8,000</p>
mport Image from "next/image";
            <p>❌ <b>Rejected Applications:</b> 3,500</p>
mport Image from "next/image";
            <p>⏳ <b>Pending Applications:</b> 1,000</p>
mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";

mport Image from "next/image";
        {/* Payment & Revenue Reports */}
mport Image from "next/image";
        <div className="bg-white shadow-md p-4 md:p-6 rounded-lg">
mport Image from "next/image";
          <h2 className="text-lg md:text-xl font-semibold mb-4">Payment & Revenue Reports</h2>
mport Image from "next/image";
          
mport Image from "next/image";
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
mport Image from "next/image";
            
mport Image from "next/image";
            {/* Total Revenue Generated */}
mport Image from "next/image";
            <div>
mport Image from "next/image";
              <h3 className="text-md md:text-lg font-semibold mb-2 flex items-center">
mport Image from "next/image";
                Total Revenue Generated
mport Image from "next/image";
                <button onClick={toggleSort} className="ml-2">
mport Image from "next/image";
                  {isAscending ? <FaSortUp /> : <FaSortDown />}
mport Image from "next/image";
                </button>
mport Image from "next/image";
              </h3>
mport Image from "next/image";
              <p>📈 <b>Month’s Revenue:</b> {isAscending ? revenueData.monthRevenue : revenueData.lastMonthRevenue}</p>
mport Image from "next/image";
              <p>📊 <b>Growth Rate:</b> {revenueData.growthRate}</p>
mport Image from "next/image";
              <p>📆 <b>Last Month’s Revenue:</b> {revenueData.lastMonthRevenue}</p>
mport Image from "next/image";
              <p>💳 <b>Subscription Revenue:</b> {revenueData.subscriptionRevenue}</p>
mport Image from "next/image";
              <p>💰 <b>One-Time Payments:</b> {revenueData.oneTimePayments}</p>
mport Image from "next/image";
            </div>
mport Image from "next/image";

mport Image from "next/image";
            {/* Pending Payments & Month Report */}
mport Image from "next/image";
            <div>
mport Image from "next/image";
              <h3 className="text-md md:text-lg font-semibold mb-2">Pending Payments & Month Report</h3>
mport Image from "next/image";
              <p>⏳ <b>Total Pending Amount:</b> {revenueData.pendingAmount}</p>
mport Image from "next/image";
              <p>🚨 <b>Overdue Payments (30+ Days):</b> {revenueData.overduePayments}</p>
mport Image from "next/image";
              <p>🏆 <b>Highest Earning Month:</b> {revenueData.highestEarningMonth}</p>
mport Image from "next/image";
              <p>📉 <b>Lowest Earning Month:</b> {revenueData.lowestEarningMonth}</p>
mport Image from "next/image";
              <p>📋 <b>Job Posting Revenue:</b> {revenueData.jobPostingRevenue}</p>
mport Image from "next/image";
            </div>
mport Image from "next/image";

mport Image from "next/image";
          </div>
mport Image from "next/image";
        </div>
mport Image from "next/image";
        
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
export default Reports;