import { propertyList } from "@/src/external/property";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type OtherBoxProps = {
  oddProperty: string;
}
const OtherBox: FC<OtherBoxProps> = ({ oddProperty }) => {
  return (
    <section className="flex flex-col items-center w-full box gap-10 mt-20 sm-screen:mt-5">
      <span className="text-primary text-xl sm-screen:text-xl">You May Also Like These Other Bijou Homes</span>

      <section className="grid grid-cols-3 gap-10 w-full md-screen:grid-cols-2 sm-screen:grid-cols-1">
        {propertyList.filter((property) => property.name.toLowerCase() !== oddProperty.toLowerCase()).map((property, index) => (
          <Link href={`/properties/${property.name}`}
            key={index} className={`group bg-[#f5f5f5] flex flex-col justify-between gap-2 relative overflow-hidden ${property.unitsLeft === 0 ? "opacity-70" : "opacity-100"}`}>
            <div className="h-56 z-50 relative">
              <Image alt="" src={property.img} fill objectFit="cover" />
            </div>

            <article className="text-center grid gap-3 px-2 z-50">
              <span className="text-water font-bold text-2xl capitalize">{property.name}</span>

              <article className="text-gray-500 flex flex-col gap-1">
                <span>{property.type}</span>

                <span>{property.floorSpace} sqm</span>

                <span>{property.plotSize}</span>
              </article>

              <article>
                <div className={`h-16 w-16 font-extrabold ${property.unitsLeft === 0 ? "bg-danger" : "bg-primary"} hexagon m-auto flex items-center justify-center text-white`}>
                  <span className="text-2xl">{property.unitsLeft}</span>
                </div>
                <span className="uppercase text-[0.7rem] font-bold">Units Left</span>
              </article>
            </article>

            {property.unitsLeft > 0 ?
              <Button radius="none" variant="bordered" className="flex relative group border w-full text-primary border-primary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3">
                <span className="flex z-20 uppercase text-[0.7rem] font-semibold group-hover:text-white">View Property</span>
                <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
              </Button>
              :
              <Button radius="none" isDisabled variant="solid" color="danger">
                <span className="flex z-20 uppercase text-[0.7rem] font-semibold group-hover:text-white">Sold Out</span>
              </Button>
            }
          </Link>
        ))}
        <article>

        </article>
      </section>
    </section>
  );
}

export default OtherBox;