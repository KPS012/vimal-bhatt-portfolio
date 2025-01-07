import React from "react";

interface ShowCasProps {
    H2: string;
    b1: string;
    b2: string;
    b3: string;
    b4: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
}

const ShowCas: React.FC<ShowCasProps> = ({ H2, b1, b2, b3, b4, p1, p2, p3, p4}) => {
  return (
    <div className="w-[100%] mt-[10vh]">
        <h2 className="text-[2vh] uppercase font-[600] text-[#ffff]">{H2}</h2>
        <ul className="grid grid-cols-2 place-content-center place-items-center gap-6 mt-[4vw] bg-[#121212] rounded-[20px] py-[3vw] shadow-xl">
            <li className="w-[380px] flex flex-wrap text-[16px] text-[#c2c2c2]"><b className="text-[#ffff] text-[4vw] ">{b1}</b><p>{p1}</p></li>
            <li className="w-[380px] flex flex-wrap text-[16px] text-[#c2c2c2]"><b className="text-[#ffff] text-[4vw] ">{b2}</b><p>{p2}</p></li>
            <li className="w-[380px] flex flex-wrap text-[16px] text-[#c2c2c2]"><b className="text-[#ffff] text-[4vw] ">{b3}</b><p>{p3}</p></li>
            <li className="w-[380px] flex flex-wrap text-[16px] text-[#c2c2c2]"><b className="text-[#ffff] text-[4vw] ">{b4}</b><p>{p4}</p></li>
        </ul>
    </div>
  );
};

export default ShowCas
