import React from "react";
import { Flame } from "lucide-react";

const Alert = () => {
  return (
    <div>
      <div>
        <Flame />
      </div>
      <div>
        <h1>High Traffic Day</h1>
        <p>
          You're getting 45% more visitors than usual. Great time to add new
          products
        </p>
      </div>
    </div>
  );
};

export default Alert;
