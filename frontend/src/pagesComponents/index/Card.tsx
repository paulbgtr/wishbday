import React from "react";

export const Card = ({ title, description }) => {
  return (
    <div className="duration-200 border-2 border-gray-200 shadow-xl hover:border-secondary card bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
