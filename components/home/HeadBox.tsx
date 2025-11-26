"use client";
import Image from "next/image";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { headBoxImages } from "@/src/external/imageLinks";
import { Button } from "@heroui/button";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

interface HeadBoxProps {
  children?: ReactNode;
}

const HeadBox = ({ children }: HeadBoxProps) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const play = useCallback(() => {
    if (!embla) return;
    autoplayTimer.current = setTimeout(() => {
      embla.scrollNext();
      play();
    }, 3000);
  }, [embla, 3000]);

  const stop = useCallback(() => {
    if (autoplayTimer.current) clearTimeout(autoplayTimer.current);
  }, []);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    embla.on("select", onSelect);

    play();

    return () => stop();
  }, [embla, play, stop, onSelect]);

  return (
    <section className="relative h-[100vh] w-full flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full z-50">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {headBoxImages.map((img, index) => (
              <div key={index} className="flex-[0_0_100%] relative h-full">
                <Image
                  src={img}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
                <article className="absolute inset-0 bg-black opacity-50"></article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-50">
          {headBoxImages.map((_, index) => (
            <button
              key={index}
              onClick={() => embla?.scrollTo(index)}
              className={`h-3  cursor-pointer rounded-full transition-all ${selected === index ? "w-5 bg-white" : "w-3 bg-white/50"
                }`}
            ></button>
          ))}
        </div>
      </div>


      {children}


      <section className="z-100 flex flex-col items-center text-center gap-6 sm-screen:gap-3">
        <section className="text-white flex flex-col items-center gap-1 sm-screen:gap-1">
          <span className="text-3xl sm-screen:text-xl">Welcome To</span>

          <span className="text-9xl heading sm-screen:text-8xl">Bijou Homes</span>

          <span className="text-3xl sm-screen:text-xl">Elegant Homes For Modern Living</span>
        </section>

        <Button as={Link} href="/book-viewing" radius="none" variant="bordered" className="flex m-auto relative group border w-max text-secondary border-secondary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3">
          <span className="flex z-20 uppercase text-[0.8rem] font-extrabold group-hover:text-primary">Book a tour</span>
          <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-secondary group-hover:w-full transition-all"></div>
        </Button>
      </section>
    </section >
  );
}

export default HeadBox;