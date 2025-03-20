import React, { useState } from "react";

const data = {
    Fruits: ["Apple", "Banana", "Pear", "Watermelon", "Grape", "Strawberry", "Mango", "Blackberry"],
    Spices: ["Salt", "Pepper", "Chilli", "Herbs", "Curry"],
    Vegetables: ["Carrot", "Cucumber"],
};

const TabContent = ({ category }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleSelect = (item) => {
        setSelectedItem((prevSelected) => (prevSelected === item ? null : item));
    };

    return (
        <ul className="list">
            {data[category].map((item) => (
                <li
                    key={item}
                    className={`list-item ${selectedItem === item ? "selected" : ""}`}
                    onClick={() => toggleSelect(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default TabContent;