import React from "react";

interface H1CardProps {
    H1: string;
    subHeading: string;
}

const H1Card: React.FC<H1CardProps> = ({ H1, subHeading}) => {
  return (
    <div className="text-[#141516] w-[100%]">
        <span className="text-sm uppercase font-[600] text-[#141516]">{subHeading}</span>
        <h1 className="text-[5vh] font-[600]">{H1}</h1>
    </div>
  );
};

export default H1Card;
