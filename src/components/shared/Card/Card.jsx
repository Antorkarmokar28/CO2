// components/Card.jsx
import React from "react";

const Card = ({ title, amount, icons = [], description, amountColor }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition">
      <div>
        <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
        <p className={`text-2xl font-bold ${amountColor || "text-gray-900"}`}>
          {amount}
        </p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 text-orange-500">
        {icons.length > 0 &&
          icons.map((Icon, index) => <Icon key={index} size={20} />)}
      </div>
    </div>
  );
};

export default Card;
