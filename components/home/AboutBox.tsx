import { Button } from "@heroui/button";
import Link from "next/link";

const AboutBox = () => {
  return (
    <section className="box grid grid-cols-2 gap-20 sm-screen:flex sm-screen:flex-col-reverse sm-screen:gap-8">
      <section className="flex flex-col items-start gap-4 sm-screen:gap-1">
        <span className="heading text-primary text-6xl sm-screen:text-4xl">About Us</span>

        <article className="grid gap-4">
          <span>
            {"Bijou Homes situated at Appolonia City in the lush suburb of Oyibi, offers 1 and 2 bedroom (expandable to 3) multi-functional, modern homes for young professionals and growing families."}
          </span>
          <span>
            {" At a location which offers superior urban infrastructure, housing and places of work, you have the opportunity to enjoy the comforts of a gated community, 24/7 security, communal  amenities and more at very affordable prices."}
          </span>
        </article>


        <Button as={Link} href="/about-us" radius="none" variant="bordered" className="flex relative group border w-max text-primary border-primary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3">
          <span className="flex z-20 uppercase text-[0.7rem] font-semibold group-hover:text-white">more about us</span>
          <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
        </Button>
      </section>
      <section className="bg-primary sm-screen:h-72">

      </section>
    </section>
  );
}

export default AboutBox;