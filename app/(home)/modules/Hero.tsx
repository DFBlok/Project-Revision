import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Imageisolate from "@/components/Imageisolate";

export const Hero = () => {
  return (
    <div className="bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-col-2 gap-4">
          <div>
            <div className="flex items-center mb-4 gap-4">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Image
                    src="/star.png"
                    alt="star"
                    width={20}
                    height={20}
                    key={`star${i}`}
                  />
                ))}
              </div>
              <p className="text-sm font-bold">75+ happy clients</p>
            </div>

            <h1 className="mb-2 ">
              We build <span className="text-green-500">Professional</span>
              Website
            </h1>
            <p className="text-xl mb-4 ">
              <b>Lorem ipsum dolor.</b> sit amet consectetur adipisicing elit.
              Inventore, nulla. Dolor, voluptatum dignissimos aspernatur
              consequatur neque voluptas quisquam corporis ipsum reiciendis!
              Error exercitationem iusto, aliquid culpa officiis molestias
              soluta obcaecati.
            </p>
            <Button
              variant="secondary"
              className=" bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Button
            </Button>
          </div>

          <div>
            <Imageisolate src="/mockup1.avif" alt="mockup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
