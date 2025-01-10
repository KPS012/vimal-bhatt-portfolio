import React from "react";

interface ListProps {
    H2: string;
    l1: string;
    l2: string;
    l3: string;
}

const HeadingList: React.FC<ListProps> = ({ H2, l1, l2, l3}) => {
  return (
    <div className="w-[100%] mt-[10vh]">
        <h2 className="text-[2vh] uppercase font-[600] text-[#ffff]">{H2}</h2>
        <ul className="mt-4 ml-8 list-disc">
            <li className="mt-4 text-[16px] text-[#c2c2c2]">{l1}</li>
            <li className="mt-4 text-[16px] text-[#c2c2c2]">{l2}</li>
            <li className="mt-4 text-[16px] text-[#c2c2c2]">{l3}</li>
        </ul>
    </div>
  );
};

export default HeadingList
