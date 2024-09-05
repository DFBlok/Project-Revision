import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-col-2 gap-4">
          <div>
            <h1 className="mb-2 ">We build Professional Website</h1>
            <p className="text-xl mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, nulla. Dolor, voluptatum dignissimos aspernatur
              consequatur neque voluptas quisquam corporis ipsum reiciendis!
              Error exercitationem iusto, aliquid culpa officiis molestias
              soluta obcaecati.
            </p>
            <Button
              variant="secondary"
              className=" bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Click
            </Button>
          </div>

          <div>
            <Image
              src="/mockup1.avif"
              alt="mockup"
              sizes="100vw"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
