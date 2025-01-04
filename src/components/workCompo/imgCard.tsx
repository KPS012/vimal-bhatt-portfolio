import React from "react";
import Image from "next/image";

interface ImageCardProps {
    alttitle: string;
    imageUrl: string;
    altText: string;
    className: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ className, alttitle, imageUrl, altText }) => {
  return (
    <div className={className}>
      <Image src={imageUrl} alt={altText} title={alttitle} className={className} layout="fill"/>
    </div>
  );
};

export default ImageCard;
