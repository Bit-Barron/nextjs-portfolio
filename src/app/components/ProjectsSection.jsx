"use client";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meine Projekte
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Alles"
          isSelected={tag === "Alles"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>

      <ul ref={ref} className="grid md:grid-cols-4 gap-8 md:gap-12">
        <Image src="/images/IMG_1428.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3416.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3520.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3521.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3522.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3523.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3591.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3656.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3658.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3660.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3665.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3670.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3671.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3679.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3682.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3710.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3712.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3721.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3724.PNG" alt="" width={250} height={200} />
        <Image src="/images/IMG_3725.PNG" alt="" width={250} height={200} />
        <Image src="/images/IMG_3716.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3715.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3713.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3675.png" alt="" width={250} height={200} />
        <Image src="/images/IMG_3678.png" alt="" width={250} height={200} />

      </ul>
    </section>
  );
};

export default ProjectsSection;
