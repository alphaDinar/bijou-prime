import { Button } from "@heroui/button";
import Link from "next/link";
import { MdEast } from "react-icons/md";

const PropertyBox = () => {
  const propertyList = [
    {
      tag: "opal",
      type: "1 bedroom expandable to 2",
      sqm: "61",
      area: "35ft x 70ft",
      img: "",
      remainder: "20",
      href: "/properties/opal"
    },
    {
      tag: "Beryl",
      type: "1 bedroom expandable to 3",
      sqm: "61",
      area: "35ft x 80ft",
      img: "",
      remainder: "20",
      href: "/properties/beryl"
    },
    {
      tag: "alexandra",
      type: "2 bedroom terrace",
      sqm: "95",
      area: "25ft x 60ft",
      img: "",
      remainder: "20",
      href: "/properties/alexandra"
    },
    {
      tag: "jade",
      type: "2 bedroom semi-detached expandable to 3",
      sqm: "90",
      area: "35ft x 80ft",
      img: "",
      remainder: "20",
      href: "/properties/jade"
    },
  ]

  return (
    <section className="flex flex-col items-center w-full box gap-10 mt-20 sm-screen:mt-5">
      <span className="heading text-primary text-6xl sm-screen:text-4xl">Our Properties</span>

      <section className="grid grid-cols-4 gap-10 w-full md-screen:grid-cols-2 sm-screen:grid-cols-1">
        {propertyList.map((property, index) => (
          <Link href={property.href} key={index} className="group bg-[#f5f5f5] flex flex-col justify-between gap-2 relative overflow-hidden">
            <div className="h-56 bg-red-300 z-50">

            </div>

            <article className="text-center grid gap-3 px-2 z-50">
              <span className="text-water font-bold text-2xl capitalize">{property.tag}</span>

              <article className="text-gray-500 flex flex-col gap-1">
                <span>{property.type}</span>

                <span>{property.sqm} sqm</span>

                <span>{property.area}</span>
              </article>

              <article>
                <div className="h-16 w-16 font-extrabold bg-primary hexagon m-auto flex items-center justify-center text-white">
                  <span className="text-2xl">20</span>
                </div>
                <span className="uppercase text-[0.7rem] font-bold">Units Left</span>
              </article>
            </article>

            <Button radius="none" variant="bordered" className="flex relative group border w-full text-primary border-primary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3">
              <span className="flex z-20 uppercase text-[0.7rem] font-semibold group-hover:text-white">View Property</span>
              <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
            </Button>
          </Link>
        ))}
        <article>

        </article>
      </section>
    </section>
  );
}

export default PropertyBox;