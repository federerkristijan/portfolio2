// components/pages/HomePage.tsx
import React from "react";
import { HomePageProps } from "@/types";
import HeroSection from "./HeroSection";

export default function HomePage({ sections }: HomePageProps) {
  const { about, contact, hero, projects } =
    sections ?? {};

  return (
    <div className="bg-[#111111]">
      <HeroSection
        title={hero?.title || ""}
        subtitle={hero?.subtitle || "Fullstack Developer"}
      />
    </div>
  );
}
