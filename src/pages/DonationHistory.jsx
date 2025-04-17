// src/pages/DonationHistory.jsx
const donationHistory = [
    { id: 1, cause: "Education for All", amount: 25.5, date: "2025-04-15" },
    { id: 2, cause: "Medical Aid Fund", amount: 18.75, date: "2025-04-12" },
    { id: 3, cause: "Wildlife Conservation", amount: 6.25, date: "2025-04-10" },
  ];
  
  const DonationHistory = () => {
    return (
      <div className="p-6 bg-white rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Donation History</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Cause</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {donationHistory.map((donation) => (
              <tr key={donation.id} className="border-t">
                <td className="p-3">{donation.cause}</td>
                <td className="p-3 text-blue-600 font-semibold">${donation.amount.toFixed(2)}</td>
                <td className="p-3">{donation.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DonationHistory;
  