import Navbar from "@/components/common/Navbar";
import TopStats from "@/components/profile/TopStats";
import ExportShareButtons from "@/components/profile/ExportShareButtons";
import Sidebar from "@/components/profile/Sidebar";
import DonationImpact from "@/components/profile/DonationImpact";
import RecentPurchases from "@/components/profile/RecentPurchases";
import NFTBadges from "@/components/profile/NFTBadges";
import Footer from "@/components/common/Footer";
import AIRecommendations from "@/components/profile/AIRecommendations";

const Profile = () => {
  const dummyData = [
    { name: "Jan", donation: 10 },
    { name: "Feb", donation: 25 },
    { name: "Mar", donation: 30 },
    { name: "Apr", donation: 15 },
  ];

  return (
    <main className="bg-gray-50 min-h-screen mt-[150px] ">
      <Navbar />
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
          {/* 🛍️ New Section: Purchase + NFT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentPurchases />
            <NFTBadges />
           
          
          </div>
          <AIRecommendations/>
        </div>
      </div>
      <Footer />
      
    </main>
    
  );
};

export default Profile;
