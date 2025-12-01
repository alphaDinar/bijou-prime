"use client";
import FooterBox from "@/components/footerBox/FooterBox";
import BookBox from "@/components/home/BookBox";
import { constructionGallery } from "@/src/external/gallery";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const ConstructionImageSet = () => {
  const params = useParams();
  const id = params.id as "construction" | "interior" | "exterior";

  const [imageSet, setImageSet] = useState<string[]>([]);

  useEffect(() => {
    if (id === "construction") {
      setImageSet(constructionGallery.constructionPhase);
    } else if (id === "interior") {
      setImageSet(constructionGallery.operationPhase.interior);
    } else {
      setImageSet(constructionGallery.operationPhase.exterior);
    }
  }, [id])


  return (
    <section className="grid gap-20">
      <section className="h-[22rem] relative flex justify-center items-center">
        <Image alt="" src={imageSet[3]} fill objectFit="cover" />
        <section className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></section>
        <strong className="z-100 text-5xl heading text-white top-10 relative">{id} Gallery</strong>
      </section>
      <section className="grid grid-cols-4 gap-10 box">
        {imageSet.map((el, i) => (
          <article key={i} className="h-60 flex relative">
            <Image alt="" src={el} fill objectFit="cover" />
          </article>
        ))}
      </section>

      <section>
        <BookBox />
        <FooterBox />
      </section>
    </section>
  );
}

export default ConstructionImageSet;