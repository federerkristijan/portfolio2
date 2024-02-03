import React from "react";
import { HomePageProps } from "@/types";
import HeroSection from "./HeroSection";

export default function HomePage({ sections }: HomePageProps) {
  const { hero } =
    sections ?? {};

  return (
    <div className="bg-[#111111] h-full">
      <HeroSection
        title={hero?.title || ""}
        subtitle={hero?.subtitle || "Fullstack Developer"}
      />
    </div>
  );
}
