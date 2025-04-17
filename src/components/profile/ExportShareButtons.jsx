import { Share2, Download, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // if using internal navigation

const ExportShareButtons = ({ data }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // for internal routes

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Month,Donation"]
        .concat(data.map((d) => `${d.name},${d.donation}`))
        .join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "donations.csv";
    link.click();
  };

  const handleContinueShopping = () => {
    // Option 1: internal route
    navigate("/products");

    // Option 2: external site
    // window.open("https://yourshop.com", "_blank");
  };

  return (
    <div className="flex flex-wrap gap-3 justify-end">
      <button
        className="flex items-center gap-2 bg-white border px-3 py-1 rounded-lg shadow-sm hover:bg-gray-100"
        onClick={handleExport}
      >
        <Download size={16} /> Export CSV
      </button>

      <button
        className="flex items-center gap-2 bg-white border px-3 py-1 rounded-lg shadow-sm hover:bg-gray-100"
        onClick={() => setOpen(true)}
      >
        <Share2 size={16} /> Share Impact
      </button>

      <button
        className="flex items-center gap-2 bg-blue-900 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-700"
        onClick={handleContinueShopping}
      >
        <ShoppingBag size={16} /> Continue Shopping
      </button>

      {/* Share Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
            <h3 className="font-semibold text-lg">Share Dashboard</h3>
            <p className="text-sm text-gray-500">Copy and share this link:</p>
            <input
              type="text"
              readOnly
              value="https://your-impact-dashboard.app"
              className="mt-2 w-full p-2 border rounded"
            />
            <div className="mt-4 flex justify-end">
              <button
                className="text-sm text-blue-600"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExportShareButtons;
