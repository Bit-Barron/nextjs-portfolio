"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Fähigkeiten",
    id: "Fähigkeiten",
    content: (
      <ul className="list-disc pl-2">
        <li>Künstlerin</li>
        <li>Künstlerin</li>
        <li>Künstlerin</li>
        <li>Künstlerin</li>
        <li>Künstlerin</li>
        <li>Künstlerin</li>
      </ul>
    ),
  },
  {
    title: "Bildung",
    id: "Bildung",
    content: (
      <ul className="list-disc pl-2">
        <li>Künstlerin</li>
        <li>Künstlerin</li>
      </ul>
    ),
  },
  {
    title: "Zertifizierungen",
    id: "Zertifizierungen",
    content: (
      <ul className="list-disc pl-2">
        <li>Künstlerin</li>
        <li>Künstlerin</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Über Mich</h2>
          <p className="text-base lg:text-lg">
            Hallo und Willkommen auf meiner Website! Ich bin Jessie, eine
            Künstlerin aus _. Ich habe einen Bachelor in Kunst und Design und
            einen Master in Kunstgeschichte. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Natus provident explicabo nesciunt
            quas, reiciendis aut placeat dolore nulla commodi quis molestias qui
            fugit consectetur! Modi odio nihil ab sint animi.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Fähigkeiten")}
              active={tab === "Fähigkeiten"}
            >
              {" "}
              Fähigkeiten{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Bildung")}
              active={tab === "Bildung"}
            >
              {" "}
              Bildung{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Zertifizierungen")}
              active={tab === "Zertifizierungen"}
            >
              {" "}
              Zertifizierungen{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
