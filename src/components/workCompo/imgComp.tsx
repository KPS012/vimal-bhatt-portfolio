import Image from "next/image";
import React from "react";

interface ImgCompProps {
    H2: string;
    alttitle: string;
    imageUrl: string;
    altText: string;
    className: string;
}

const ImgComp: React.FC<ImgCompProps> = ({ H2, imageUrl, altText, alttitle, className}) => {
  return (
    <div className="w-[100%] mt-[10vh]">
        <h2 className="text-[2vh] uppercase font-[600] text-[#141516]">{H2}</h2>
        <ul className="grid grid-cols-2 place-content-center place-items-center gap-6 mt-[4vw]">
            <li className="flex flex-wrap text-[16px] text-[#141516]">
                <Image src={imageUrl} alt={altText} title={alttitle} className={className} width={600} height={800}/>
            </li>
            <li className="flex flex-wrap text-[16px] text-[#141516]">
                <Image src={imageUrl} alt={altText} title={alttitle} className={className} width={600} height={800}/>
            </li>
            <li className="flex flex-wrap text-[16px] text-[#141516]">
                <Image src={imageUrl} alt={altText} title={alttitle} className={className} width={600} height={800}/>
            </li>
            <li className="flex flex-wrap text-[16px] text-[#141516]">
                <Image src={imageUrl} alt={altText} title={alttitle} className={className} width={600} height={800}/>
            </li>
        </ul>
    </div>
  );
};

export default ImgComp
