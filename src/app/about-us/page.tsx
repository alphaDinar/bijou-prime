import FooterBox from "@/components/footerBox/FooterBox";
import BookBox from "@/components/home/BookBox";
import { galleryList } from "@/src/external/imageLinks";
import Image from "next/image";

const AboutUs = () => {
  const bgImg = "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5d2ee1a33622e61986708161_IMG_9262-min.jpg";
  const mapImg = "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5d52b0442df046a04e7258fa_PLOT%20LAYOUT-01-min.jpg";

  type PropertyType = {
    name: string;
    bedrooms: number;
    floorSpace: number;
    plotSize: string;
    units: number;
    expandableTo: string;
  }

  const propertyList: PropertyType[] = [
    {
      name: "Jade",
      bedrooms: 2,
      floorSpace: 90,
      plotSize: "35ft x 80ft",
      units: 20,
      expandableTo: "3"
    },
    {
      name: "Alexandra",
      bedrooms: 2,
      floorSpace: 95,
      plotSize: "25ft x 60ft",
      units: 20,
      expandableTo: "N/A"
    },
    {
      name: "Beryl",
      bedrooms: 1,
      floorSpace: 61,
      plotSize: "35ft x 80ft",
      units: 20,
      expandableTo: "3"
    },
    {
      name: "Opal",
      bedrooms: 1,
      floorSpace: 61,
      plotSize: "35ft x 70ft",
      units: 20,
      expandableTo: "2"
    },
  ]

  return (
    <section className="grid gap-10 sm-screen:gap-5">
      <section className="h-[25rem] relative flex justify-center items-center">
        <Image alt="" src={bgImg} fill objectFit="cover" />
        <section className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></section>
        <strong className="z-100 text-7xl heading text-white top-10 relative">About Us</strong>
      </section>

      <section className="flex justify-center gap-10 md-screen:grid md-screen:grid-cols-3 md-screen:gap-1 md-screen:px-[10%]">
        {galleryList.slice(31, 34).map((el, i) => (
          <div className="h-52 w-52 relative md-screen:w-auto md-screen:h-32" key={i}>
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


      <section className="w-full grid grid-cols-2 gap-10 box mt-20 items-center sm-screen:grid-cols-1 sm-screen:gap-0">
        <section className="flex flex-col gap-10">
          <article className="grid">
          <span className="heading text-4xl text-primary">Our Master Plan</span>
          <span>
            {"Bijou Homes is a gated residential community of 112 elegant and affordable homes. It is a first class urban development with well-planned infrastructure and amenities in a secure and children friendly community."}
          </span>
          </article>

          <section>
            <header className="grid grid-cols-6 [&>*]:bg-primary text-white [&>*]:py-2 [&>*]:px-1 sm-screen:text-[0.8rem] sm-screen:grid-cols-5">
              <span>Property</span>
              <span>Bedrooms</span>
              <span>Floor Space</span>
              <span>Plot Size (FT)</span>
              <span>Units</span>
              <span className="sm-screen:hidden">Expandable</span>
            </header>

            {propertyList.map((property)=>(
              <section key={property.name} className="grid grid-cols-6 [&>*]:py-2 [&>*]:px-1 [&>*]:border [&>*]:border-gray-300 sm-screen:text-[0.8rem] sm-screen:grid-cols-5">
                 <span>{property.name}</span>
              <span>{property.bedrooms}</span>
              <span>{property.floorSpace}</span>
              <span>{property.plotSize}</span>
              <span>{property.units}</span>
              <span className="sm-screen:hidden">To {property.expandableTo}</span>
              </section>
            ))}
          </section>

        </section>

        <section className="h-[35rem] relative">
          <Image alt="" src={mapImg} fill objectFit="contain" />
        </section>
      </section>


      <section>
        <BookBox />
        <FooterBox />
      </section>
    </section>
  );
}

export default AboutUs;