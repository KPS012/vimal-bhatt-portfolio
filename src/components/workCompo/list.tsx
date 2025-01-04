import React from "react";

interface ListProps {
    H2: string;
    b1: string;
    b2: string;
    b3: string;
    l1: string;
    l2: string;
    l3: string;
}

const List: React.FC<ListProps> = ({ H2, b1, b2, b3, l1, l2, l3}) => {
  return (
    <div className="w-[100%] mt-[10vh]">
        <h2 className="text-[2vh] uppercase font-[600] text-[#141516]">{H2}</h2>
        <ul className="mt-4 ml-8 list-disc">
            <li className="mt-4 text-[16px] text-[#141516]"><h3 className="text-[#141516] font-[600]">{b1}: </h3>{l1}</li>
            <li className="mt-4 text-[16px] text-[#141516]"><h3 className="text-[#141516] font-[600]">{b2}: </h3>{l2}</li>
            <li className="mt-4 text-[16px] text-[#141516]"><h3 className="text-[#141516] font-[600]">{b3}: </h3>{l3}</li>
        </ul>
    </div>
  );
};

export default List
