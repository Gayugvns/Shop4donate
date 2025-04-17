import Navbar from "@/components/common/Navbar";
import TopStats from "@/components/profile/TopStats";
import ExportShareButtons from "@/components/profile/ExportShareButtons";
import Sidebar from "@/components/profile/Sidebar";
import DonationImpact from "@/components/profile/DonationImpact";

const Profile = () => {
  const dummyData = [
    { name: "Jan", donation: 10 },
    { name: "Feb", donation: 25 },
    { name: "Mar", donation: 30 },
    { name: "Apr", donation: 15 },
  ];

  return (
   
    <main className="bg-gray-50 min-h-screen 
    mt-[150px] p-4">
       <Navbar />
      {/* Header with buttons */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Your Impact Dashboard</h1>
          <p className="text-gray-600 text-sm">Track your shopping impact and donations</p>
        </div>
        <ExportShareButtons data={dummyData} />
      </div>

      {/* Layout: Sidebar + Main */}
      <div className="flex flex-col lg:flex-row gap-6">
        <Sidebar />
        <div className="flex-1 space-y-6">
          <TopStats />
          <DonationImpact />
        </div>
      </div>
    </main>
  );
};

export default Profile;
