"use client";
import FooterBox from "@/components/footerBox/FooterBox";
import BookBox from "@/components/home/BookBox";
import { constructionGallery } from "@/src/external/gallery";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { MdEast } from "react-icons/md";

const ConstructionGallery = () => {
  return (
    <section className="grid gap-10 sm-screen:gap-0">
      <section className="pt-[10rem] box grid gap-10 md-screen:pt-[25vh] sm-screen:gap-3 sm-screen:pt-[22vh]">
        <span className="heading text-primary text-4xl sm-screen:text-2xl">Construction Gallery</span>

        <section className="grid gap-14">
          <section className="grid">
            <header className="underline text-xl">
              <span className=" flex bg-primary text-white py-2 px-4">Construction Phase</span>
              <div className="flex w-full h-[2px] bg-primary"></div>
            </header>
            <Link className="grid w-72 items-start relative sm-screen:w-full" href={"construction/construction"}>
              <article className="h-60 w-full flex relative sm-screen:h-52">
                <Image alt="" src={constructionGallery.constructionPhase[0]} fill objectFit="cover" />
              </article>
              <Button className="" radius="none" color="primary">
                <MdEast />
              </Button>
            </Link>
          </section>

          <section>
            <header className="underline text-xl">
              <span className="flex bg-primary text-white py-2 px-4">Completed Project</span>
              <div className="flex w-full h-[2px] bg-primary"></div>
            </header>
            <section className="flex gap-10 sm-screen:grid sm-screen:grid-cols-1 sm-screen:gap-5">
              <Link className="grid w-72 items-start relative sm-screen:w-full" href={"construction/exterior"}>
                <article className="h-60 w-full flex relative sm-screen:h-52">
                  <Image alt="" src={constructionGallery.operationPhase.exterior[0]} fill objectFit="cover" />
                </article>
                <Button className="" radius="none" color="primary">Exterior</Button>
              </Link>

              <Link className="grid w-72 items-start relative sm-screen:w-full" href={"construction/interior"}>
                <article className="h-60 w-full flex relative sm-screen:h-52">
                  <Image alt="" src={constructionGallery.operationPhase.interior[0]} fill objectFit="cover" />
                </article>
                <Button className="" radius="none" color="primary">Interior</Button>
              </Link>
            </section>
          </section>
        </section>
      </section>

      <section>
        <BookBox />
        <FooterBox />
      </section>
    </section>
  );
}

export default ConstructionGallery;