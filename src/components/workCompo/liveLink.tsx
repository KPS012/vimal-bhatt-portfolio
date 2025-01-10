import React from "react";

interface ListProps {
    H6: string;
    Url: string;
    LinkText: string;
}

const LiveLink: React.FC<ListProps> = ({ H6, LinkText, Url}) => {
  return (
    <div className="w-[100%] mt-[10vh] flex gap-4">
        <h6 className="text-[2vh] uppercase font-[600] text-[#ffff]">{H6}</h6>
        <a href={Url} className="underline text-[2vh] uppercase font-[600] text-[#ffff]" >{LinkText}</a>
    </div>
  );
};

export default LiveLink
