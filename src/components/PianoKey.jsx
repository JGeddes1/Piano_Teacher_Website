import React from "react";

const PianoKey = ({ note, isSharp, label, onClick, small }) => {
  const baseStyles = small
    ? "w-full h-4 text-xs" // Smaller dimensions
    : "w-full h-6 text-sm"; // Default dimensions

  const blackKeyStyles = `bg-black text-white ${baseStyles}   border border-gray-500 rounded-sm`;
  const whiteKeyStyles = `bg-white text-black ${baseStyles} border border-gray-500 rounded-sm`;

  return (
    <button
      onClick={() => onClick(note)}
      className={isSharp ? blackKeyStyles : whiteKeyStyles}
    >
      {label}
    </button>
  );
};

export default PianoKey;
