import FooterBox from "@/components/footerBox/FooterBox";
import { eventImages } from "@/src/external/imageLinks";
import Image from "next/image";
import Link from "next/link";

const EventGallery = () => {
  return (
    <section className="grid gap-10 sm-screen:gap-0">
      <section className="pt-[10rem] box grid gap-5 md-screen:pt-[25vh] sm-screen:gap-3 sm-screen:pt-[22vh]">
        <span className="heading text-primary text-4xl sm-screen:text-2xl">Event Gallery</span>

        <section className="grid grid-cols-4 gap-4 md-screen:grid-cols-3 sm-screen:grid-cols-2 sm-screen:gap-2">
          {eventImages.map((el, i) => (
            <Link href={el} target="_blank" className="h-60 relative sm-screen:h-32" key={i}>
              <Image alt="" src={el} fill objectFit="cover" />
            </Link>
          ))}
        </section>
      </section>
      <FooterBox />
    </section>
  );
}

export default EventGallery;