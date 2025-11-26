import FooterBox from "@/components/footerBox/FooterBox";
import BookBox from "@/components/home/BookBox";
import { galleryList } from "@/src/external/imageLinks";
import Image from "next/image";

const AboutUs = () => {
  const bgImg = "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5d2ee1a33622e61986708161_IMG_9262-min.jpg";

  return (
    <section className="grid gap-10 sm-screen:gap-5">
      <section className="h-[25rem] relative flex justify-center items-center">
        <Image alt="" src={bgImg} fill objectFit="cover" />
        <section className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></section>
        <strong className="z-100 text-7xl heading text-white top-10 relative">About Us</strong>
      </section>

      <section className="flex justify-center gap-10 md-screen:grid md-screen:grid-cols-3 md-screen:gap-1 md-screen:px-[10%]">
        {galleryList.slice(31, 34).map((el, i) => (
          <div className="h-52 w-52 bg-red-300 relative md-screen:w-auto md-screen:h-32" key={i}>
            <Image alt="" src={el} fill objectFit="cover" />
          </div>
        ))}
      </section>

      <section className="text-gray-700 grid gap-3 px-[15%] text-center md-screen:px-[7.5%]">
        <article>
          {"Bijou Homes situated at Appolonia City in the lush suburb of Oyibi, offers 1 and 2 bedroom (expandable to 3) multi-functional, modern homes for young professionals and growing families."}
        </article>
        <article>
          {"At a location that offers superior urban infrastructure, housing and places of work, you have the opportunity to enjoy the comforts of a gated community, 24/7 security, communal  amenities and more at very affordable prices."}
        </article>
      </section>


      <section>
        <BookBox />
        <FooterBox />
      </section>
    </section>
  );
}

export default AboutUs;