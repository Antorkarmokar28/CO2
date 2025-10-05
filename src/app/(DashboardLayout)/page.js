import Card from "@/components/shared/Card/Card";
import React from "react";
import { TrendingUp, TrendingDown, Coins, Plus } from "lucide-react";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-bold">Welcome back, Ahamed!👋</h1>
          <p className="text-4xl text-slate-600 mt-6">
            {"Here's"} an overview of your Shell Card activity and rewards
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r from-[#F76D02] to-[#FCB045] font-bold text-white py-2 px-4 rounded-xl flex items-center gap-4 cursor-pointer">
            <Plus />
            Add New Card
          </button>
        </div>
      </div>
      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <Card
          title="Available Points"
          amount="1,450"
          description="Ready to redeem"
          icons={[Coins]}
        />
        <Card
          title="Earned This Month"
          amount="+320"
          description="vs last month"
          icons={[TrendingUp]}
          amountColor="text-green-600"
        />
        <Card
          title="Points Redeemed"
          amount="-100"
          description="This month"
          icons={[TrendingDown]}
        />
        <Card
          title="Monthly Points Activity"
          amount="+220"
          description="Net points"
          icons={[Coins]}
        />
      </div>
    </div>
  );
};

export default Home;
