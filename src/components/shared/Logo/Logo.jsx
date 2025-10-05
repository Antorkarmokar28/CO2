import { Loader } from "lucide-react";
const Logo = () => {
  return (
    <div className="bg-gradient-to-r from-[#F76D02] to-[#FCB045] font-bold w-10 h-10 px-5 py-5 rounded-full flex justify-center items-center">
      <Loader className="text-white" />
    </div>
  );
};

export default Logo;
