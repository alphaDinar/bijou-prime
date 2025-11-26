import Image from "next/image";
import Link from "next/link";
import { MdOutlineCamera } from "react-icons/md";

const Gallery = () => {
  const bgImg = "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5d2ee1a33622e61986708161_IMG_9262-min.jpg";

  const constructionBg = "https://res.cloudinary.com/dvnemzw0z/image/upload/v1764193379/BH-FNB-28_eka3rk.jpg";
  const eventBg = "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5d2eded9433de703cdfae85a_IMG_9559.jpg";

  return (
    <section className="grid gap-10 sm-screen:gap-5">
      <section className="h-[25rem] relative flex justify-center items-center">
        <Image alt="" src={bgImg} fill objectFit="cover" />
        <section className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></section>
        <strong className="z-100 text-7xl heading text-white top-10 relative">Gallery</strong>
      </section>

      <section className="grid grid-cols-2 gap-10 box h-80 sm-screen:gap-2 sm-screen:h-52">
        <section className="flex flex-col gap-2 sm-screen:gap-1">
          <Link href={"/gallery/construction"} className="cursor-pointer group flex-1 relative flex items-center justify-center">
            <Image alt="" src={constructionBg} fill objectFit="cover" />
            <article className="w-full h-full bg-black opacity-25 absolute"></article>
            <MdOutlineCamera size={50} className="text-white z-100 group-hover:scale-150 transition-all" />
          </Link>
          <span className="heading text-primary text-2xl">Construction</span>
        </section>
        <section className="flex flex-col gap-2 sm-screen:gap-1">
          <Link href={"/gallery/events"} className="group cursor-pointer flex-1 relative flex items-center justify-center">
            <Image alt="" src={eventBg} fill objectFit="cover" />
            <article className="w-full h-full bg-black opacity-25 absolute"></article>
            <MdOutlineCamera size={50} className="text-white z-100 group-hover:scale-150 transition-all" />
          </Link>
          <span className="heading text-primary text-2xl">Events</span>
        </section>
      </section>
    </section>
  );
}

export default Gallery;