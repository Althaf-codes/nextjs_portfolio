'use client'
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 
interface CustomListProps {
  description: string;  // Input string to be split
}

const CustomList: React.FC<CustomListProps> = ({ description }) => {
  // Split the description by "|"
  const descriptionItems = description.split("|");

  return (
    <ul className="list-none pl-0">
      {descriptionItems.map((item, index) => (
        <li key={index} className="flex items-start mb-2 text-xs">
          <FaCheckCircle className="text-green-500 mr-2 " size={12} style={{ flexShrink: 0 }} /> 
          <span>{item.trim()}</span>
        </li>
      ))}
    </ul>
  );
};

export default CustomList;