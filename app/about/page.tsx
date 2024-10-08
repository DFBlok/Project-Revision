"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="mx-auto w-1/2 py-10">
      <h1 className="text-center mb-10 font-bold pb-3 text-3xl underline bg-purple-600 ">
        Lorem.
      </h1>
      <p className="text-center p-5 text-emerald-950 text-2xl bg-red-200 w-auto mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ullam modi
        recusandae reiciendis sint enim sit perferendis dignissimos autem
        necessitatibus, quis aut laborum totam suscipit qui expedita, quam
        distinctio quisquam!
      </p>
      <Button>Add to cart</Button>
    </div>
  );
};

export default AboutPage;
