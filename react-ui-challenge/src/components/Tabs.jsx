import React, { useState } from "react";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Fruits");

    const tabs = ["Fruits", "Spices", "Vegetables"];

    return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;