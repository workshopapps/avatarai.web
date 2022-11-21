import React from "react";

export const Feature = ({ color }) => {
  return (
    <div>
      <div style={{ color: color }} className="py-2">
        <span style={{ color: color }}>600 pictures</span> just for you
      </div>
    </div>
  );
};
