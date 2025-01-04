import React from "react";

interface HeadParaProps {
    H2: string;
    Para: string;
}

const HeadPara: React.FC<HeadParaProps> = ({ H2, Para}) => {
  return (
    <div className="w-[100%] mt-[10vh]">
        <h2 className="text-[2vh] uppercase font-[600] text-[#141516]">{H2}</h2>
        <p className="mt-4 text-[16px] text-[#141516]">{Para}</p>
    </div>
  );
};

export default HeadPara
