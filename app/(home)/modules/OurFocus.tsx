import React from "react";
import MoneyImg from "@/public/6838.jpg";

import Image from "next/image";
import { Button } from "@/components/Button";

export const OurFocus = () => {
  return (
    <section className="bg-gray-100 py-8 md:py-16">
      <div className="container mx-auto  px-4">
        <div className="text-center mb-8">
          <h2 className="mb-4">
            Our <span className="text-green-400">Foucus</span>
          </h2>
          <p className="text-xl">
            We focus on building websites that help you achieves your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.description}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="p-4 bg-gradient-to-r from-green-400 to-[#50e2d3] rounded-lg">
                <Image
                  src={feature.image}
                  alt="feature"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="my-4">{feature.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: feature.description }} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button />
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    image: MoneyImg,
    title: "Unique Design",
    description: "ahjdhashdhagdhgasjd jasdh asjdgjas dasjdgasjdg asj",
  },
  {
    image: MoneyImg,
    title: "Performance",
    description: "gsahghas dasjd asd asgdashgdhasdhgashd ashgdhasd",
  },
  {
    image: MoneyImg,
    title: "Direction",
    description: "gsahghas dasjd asd asgdashgdhasdhgashd ashgdhasd",
  },
  {
    image: MoneyImg,
    title: "Money",
    description: "gsahghas dasjd asd asgdashgdhasdhgashd ashgdhasd",
  },
  {
    image: MoneyImg,
    title: "Responsive",
    description: "gsahghas dasjd asd asgdashgdhasdhgashd ashgdhasd",
  },

  {
    image: MoneyImg,
    title: "SEO",
    description: "gsahghas dasjd asd asgdashgdhasdhgashd ashgdhasd",
  },
];

export default OurFocus;
