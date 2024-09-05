import React from "react";
import Image from "next/image";

export const Imageisolate = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        sizes="100vw"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
    </>
  );
};

export default Imageisolate;
