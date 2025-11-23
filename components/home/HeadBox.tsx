import Image from "next/image";
import { ReactNode } from "react";
import { headBoxImages } from "@/src/external/imageLinks";
import { Button } from "@heroui/button";
import Link from "next/link";


interface HeadBoxProps {
  children?: ReactNode;
}
const HeadBox = ({ children }: HeadBoxProps) => {
  return (
    <section className="relative bg-blue-300 h-[100vh] w-full flex justify-center items-center">
      <article className="absolute top-0 left-0 z-50 bg-black w-full h-full">
        <Image src={headBoxImages[0]} alt="" fill objectFit="cover" />
        <article className="bg-black absolute top-0 left-0 w-full h-full opacity-50">

        </article>
      </article>
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
    </section>
  );
}

export default HeadBox;