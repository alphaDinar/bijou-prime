"use client";
// import { propertyList } from "@/src/external/property";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { BiHomeHeart } from "react-icons/bi";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { PiSteps } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";
import CircleBox from "./CircleBox";
import ContactBox from "@/components/home/ContactBox";
import OtherBox from "./OtherBox";
import BookBox from "@/components/home/BookBox";
import FooterBox from "@/components/footerBox/FooterBox";
import { propertyList } from "@/src/external/property";

interface PageProps {
  params: {
    id: string;
  };
}

const ViewProperty = async () => {
  const params = useParams();
  const id = params.id;
  // const { id } = await params;

  const property = propertyList.find((property) => property.name === id);
  if (!property) {
    return notFound();
  }

  const featureList = [
    "Pre-painted aluminium long span roofing sheets",
    "External security doors and internal flush doors",
    "Tiled floors",
    "Plastic T & G (external) and plasterboard ceilings (internal)",
    "UPVC sliding glazed windows",
    "Fine textured paint finish to the external walls, smooth paint finish to the inside walls",
    "Sanitary appliances - kitchen sinks, wall mirrors, wash hand basins and water closets with dual flush systems",
    "Bio fill septic tanks"
  ]

  const processList = [
    "Pick up a reservation form at a fee of $1000 or cedi equivalent",
    "Select a plot on the site layout plan.",
    "Select payment option (cash installment plan or mortgage plan).",
    "Sign and return an Offer Letter.",
    "Submit a Facility Letter to Bijou Homes within 30 working days of the reservation in the case of mortgage payment.",
    "Settle the required minimum deposit and receive a Sale and Purchase Agreement.",
    "Sign and return the Sale and Purchase Agreement.",
    "Receive monthly progress reports until your home is delivered."
  ]

  const circleBox = (amount: string, tag: string) => {
    return <article className="w-max flex flex-col items-center gap-2 text-center">
      <article className="text-[1.6rem] font-semibold border-3 border-primary w-30 h-30 rounded-full items-center justify-center flex">{amount}</article>
      <span className="uppercase w-30 flex text-[0.8rem] text-primary font-extrabold">{tag}</span>
    </article>
  }

  return (
    <section className="grid gap-20 md-screen:gap-10">
      <section>
        <section className="h-[32rem] relative mb-20 md-screen:mb-0 sm-screen:h-[20rem]">
          <Image alt="" src={property.img} fill objectFit="cover" />
          <section className="bg-black text-center max-w-[53%] md-screen:hidden grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center absolute bottom-0 translate-y-1/2 right-10 md-screen:left-0 font-bold px-10 py-8 text-white">
            <article className="flex flex-col items-center pr-5">
              <span className="text-secondary text-5xl">{property.name}</span>
              <span className="text-xl">{property.type}</span>
            </article>

            <article className="flex flex-col items-center border-l border-l-white px-5 py-4">
              <span className="uppercase text-primary font-extrabold text-[0.7rem]">no. Of bathrooms</span>
              <span className="text-xl">{property.bathrooms}</span>
            </article>

            <article className="flex flex-col items-center border-l border-l-white px-5 py-4">
              <span className="uppercase text-primary font-extrabold text-[0.7rem]">floor space</span>
              <span className="text-xl">{property.floorSpace} sq.m</span>
            </article>

            <article className="flex flex-col items-center border-l border-l-white px-5 py-4">
              <span className="uppercase text-primary font-extrabold text-[0.7rem]">plot size</span>
              <span className="text-xl">{property.plotSize}</span>
            </article>

            <div className="w-44 h-44 rounded-full overflow-hidden border-5 border-secondary items-center justify-center flex absolute top-0 left-0 -translate-x-1/2 -translate-y-[70%] md-screen:relative md-screen:-translate-x-0 md-screen:-translate-y-0">
              <div className="bg-primary absolute z-10 w-full h-full opacity-75"></div>
              <article className="flex gap-1 z-20">
                <span>US$</span>
                <span className="text-4xl font-extrabold">{property.price.toLocaleString()}</span>
              </article>
            </div>
          </section>
        </section>
        <section className="bg-black text-center hidden md-screen:grid pt-10 gap-5 text-white mob-screen:pt-6">
          <article className="flex flex-col items-center pr-5">
            <span className="text-secondary text-5xl">{property.name}</span>
            <span className="text-xl">{property.type}</span>
          </article>

          <article className="flex flex-col items-center ">
            <span className="uppercase text-primary font-extrabold text-[0.7rem]">no. Of bathrooms</span>
            <span className="text-xl">{property.bathrooms}</span>
          </article>

          <article className="flex flex-col items-center ">
            <span className="uppercase text-primary font-extrabold text-[0.7rem]">floor space</span>
            <span className="text-xl">{property.floorSpace} sq.m</span>
          </article>

          <article className="flex flex-col items-center">
            <span className="uppercase text-primary font-extrabold text-[0.7rem]">plot size</span>
            <span className="text-xl">{property.plotSize}</span>
          </article>

          <div className="text-white py-4 items-center justify-center flex absolute top-0 left-0 -translate-x-1/2 -translate-y-[70%] md-screen:relative md-screen:-translate-x-0 md-screen:-translate-y-0">
            <div className="bg-primary absolute z-10 w-full h-full opacity-75"></div>
            <article className="flex gap-1 z-20">
              <span>US$</span>
              <span className="text-4xl font-extrabold">{property.price.toLocaleString()}</span>
            </article>
          </div>
        </section>
      </section>




      <section className="h-96 grid grid-cols-2 gap-4 box md-screen:grid-cols-1">
        <section className="relative">
          <Image alt="" src={property.floorPlan.layout} fill objectFit="contain" />
        </section>
        <section className="relative">
          <Image alt="" src={property.floorPlan.map} fill objectFit="contain" />
        </section>
      </section>

      <section className="grid-cols-2 box grid md-screen:grid-cols-1">
        <section className="bg-gray-200 p-20 gap-5 grid md-screen:p-10">
          <article className="flex gap-2 items-center text-blue-900">
            <BiHomeHeart size={25} />
            <span className="uppercase font-bold">features</span>
          </article>

          <section>
            {featureList.map((feature, index) => (
              <article key={index} className="flex items-center gap-3 border-b py-2 border-b-gray-300">
                <VscDebugBreakpointData className="shrink-0" />
                <span>{feature}</span>
              </article>
            ))}
          </section>
        </section>
        <section className="bg-gray-100 p-20 gap-5 grid md-screen:p-10">
          <article className="flex gap-2 items-center text-blue-900">
            <PiSteps size={25} />
            <span className="uppercase font-bold">process</span>
          </article>

          <section>
            {processList.map((el, index) => (
              <article key={index} className="flex items-center gap-3 border-b py-2 border-b-gray-300">
                <span>{index + 1}.</span>
                <span>{el}</span>
              </article>
            ))}
          </section>
        </section>
      </section>


      <section className="box grid gap-12">
        <section className="grid gap-7">
          <header className="text-blue-900 flex items-center gap-2">
            <GiPayMoney size={25} />
            <span className="uppercase font-bold">cash repayment terms</span>
          </header>

          <section className="px-5 flex gap-16 flex-wrap md-screen:gap-5">
            <CircleBox amount={property.cashTerms.minimum.toLocaleString()} tag="minimum cash deposit - $" />
            <CircleBox amount={property.cashTerms.sixMonths.toLocaleString()} tag="6 months installment - $" />
            <CircleBox amount={property.cashTerms.twelveMonths.toLocaleString()} tag="12 months installment - $" />
          </section>
        </section>

        <div className="bg-gray-400 w-full h-[1px] flex" />

        <section className="grid gap-7">
          <header className="text-blue-900 flex items-center gap-2">
            <GiPayMoney size={25} />
            <span className="uppercase font-bold">mortgage repayment terms - Resident GHANAIANS</span>
          </header>

          <section className="px-5 flex gap-16 flex-wrap md-screen:gap-5">
            <CircleBox amount={property.mortgageTerms.loanAmount.toLocaleString()} tag="loan amount - $" />
            <CircleBox amount={property.mortgageTerms.minimumCash.toLocaleString()} tag="minimum cash deposit - $" />
            <CircleBox amount={property.mortgageTerms.tenure.toLocaleString() + " years"} tag="tenure" />
            <CircleBox amount={property.mortgageTerms.baseRate.toLocaleString() + " %"} tag="base rate" />
            <CircleBox amount={property.mortgageTerms.monthlyRepayment.toLocaleString()} tag="monthly repayment - $" />
            <CircleBox amount={property.mortgageTerms.monthlyIncome.toLocaleString()} tag="qualifying monthly income - $" />

          </section>
        </section>

        <div className="bg-gray-400 w-full h-[1px] flex" />

        <section className="grid gap-7">
          <header className="text-blue-900 flex items-center gap-2">
            <GiPayMoney size={25} />
            <span className="uppercase font-bold">PROPERTY RENTAL VALUE</span>
          </header>

          <section className="px-5 flex gap-16 flex-wrap md-screen:gap-5">
            <CircleBox amount={property.propertyRentalValue.rentValue.toLocaleString()} tag="RENT VALUE - $" />
            <CircleBox amount={property.propertyRentalValue.averageYield.toLocaleString() + " %"} tag="AVERAGE RENTAL YIELD" />
          </section>
        </section>
      </section>

      <section>
        <ContactBox propertyType={property.type} />

        <OtherBox oddProperty={property.name} />
      </section>

      <section>
        <BookBox />
        <FooterBox />
      </section>
    </section>
  );
};

export default ViewProperty;
