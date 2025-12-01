"use client";
import { Input, Textarea } from "@heroui/input";
import { addToast, Select, SelectItem } from "@heroui/react";
import Image from "next/image";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@heroui/button";
import { FC, useState } from "react";
import { sendSMS } from "@/src/external/sms";
import { adminContact, callLink, mapLink } from "@/src/external/quickLinks";
import FooterBox from "@/components/footerBox/FooterBox";


const VisitBox = () => {
  const channelList = [
    { tag: "phone number", value: "+233 550 382 008", logo: <MdOutlinePhoneInTalk />, href: callLink },
    { tag: "email address", value: "info@bijouhomesgh.com", logo: <MdOutlineMail />, href: "" },
    { tag: "whatsApp", value: "+233 550 382 008", logo: <FaWhatsapp />, href: "https://wa.me/+233550382008" },
    { tag: "Location", value: "Oyibi Accra-Ghana", logo: <IoLocationOutline />, href: mapLink }
  ]

  const propertyList = [
    { tag: "opal", value: "1 Bedroom Expandable to 2", img: "https://res.cloudinary.com/dvnemzw0z/image/upload/v1763905176/bijou/BH-FNB-1_ifq12x.jpg" },
    { tag: "alexandra", value: "2 Bedroom Terrace", img: "https://res.cloudinary.com/dvnemzw0z/image/upload/v1763905275/bijou/BH-FNB-63_adzar1.jpg" },
    { tag: "jade", value: "2 Bedroom Semi-detached", img: "https://res.cloudinary.com/dvnemzw0z/image/upload/v1763905361/bijou/BH-FNB-32_gtrts6.jpg" }
  ]

  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");


  const requestViewing = async () => {
    const messageData = [
      "New Viewing Request",
      "-----------------------------",
      `Name : ${name}`,
      `Email : ${email}`,
      `Phone Number : ${phoneNumber}`,
      `Interested In : ${selectedPropertyType ? selectedPropertyType : "general"}`,
      `message : ${message}`,
    ];

    const finalMessage = messageData.join("\n");

    sendSMS(adminContact, finalMessage);
    addToast({
      title: "Thank you, we will respond to your request soon.",
      variant: "solid",
      radius: "none",
      color: "primary"
    });

    setName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedPropertyType("");
    setMessage("");
  }

  return (
    <section>
      <section id="contact-us" className="min-h-[100vh] md-screen:min-h-auto bg-[#1a1a19] pt-[20vh] pb-[5vh] box grid grid-cols-2 gap-16 md-screen:grid-cols-1 md-screen:gap-10 sm-screen:py-8 sm-screen:gap-6">
        <section className="flex gap-3 md-screen:flex-col">
          <form onSubmit={(e) => {
            e.preventDefault();
            requestViewing();
          }} className="bg-white grid p-10 gap-5 flex-1 shadow-md sm-screen:p-5">
            <header className="grid text-gray-600">
              <span className="heading text-3xl">Request A Viewing</span>
              <span>
                {"To request a viewing ,please fill in the form below"}
              </span>
              <article className="flex flex-col font-semibold">
                <article className="flex gap-5">
                  <span>8am -5pm</span>
                  <span>Mondays - Fridays</span>
                </article>
                <article className="flex gap-5">
                  <span>9am -5pm</span>
                  <span>Saturdays</span>
                </article>
                <article className="flex gap-5">
                  <span>2pm -5pm</span>
                  <span>Sundays</span>
                </article>
              </article>
            </header>

            <section className="flex-col gap-2 md-screen:flex-row hidden md-screen:flex sm-screen:grid sm-screen:grid-cols-3">
              {propertyList.map((property, index) => (
                <div className={`w-24 h-24 sm-screen:w-full sm-screen:h-20 relative ${selectedPropertyType === property.value ? "border-3 border-secondary" : "flex"}`} key={index}>
                  <Image alt="" src={property.img} fill objectFit="cover" />
                </div>
              ))}
            </section>

            <section className="grid gap-2">
              <div>
                <span className="text-gray-500 uppercase text-[0.75rem] font-bold">name</span>
                <Input radius="none" value={name} onChange={(e) => setName(e.target.value)} isRequired variant="bordered" className="border-primary border" color="primary" placeholder="John Doe" />
              </div>

              <div>
                <span className="text-gray-500 uppercase text-[0.75rem] font-bold">Email</span>
                <Input radius="none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} isRequired variant="bordered" className="border-primary border" color="primary" placeholder="example@gmail.com" />
              </div>

              <div>
                <span className="text-gray-500 uppercase text-[0.75rem] font-bold">Phone Number</span>
                <Input radius="none" minLength={10} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} isRequired variant="bordered" className="border-primary border" color="primary" placeholder="" />
              </div>

              <div>
                <span className="text-gray-500 uppercase text-[0.75rem] font-bold">Interested In</span>
                <Select variant="bordered" value={selectedPropertyType} onChange={(e) => {
                  setSelectedPropertyType(e.target.value);
                }} radius="none" className="border border-primary" color="primary" placeholder="Select Property Type">
                  {propertyList.map((property) => (
                    <SelectItem key={property.value}>{property.value}</SelectItem>
                  ))}
                </Select>
              </div>

              <div>
                <span className="text-gray-500 uppercase text-[0.75rem] font-bold">Questions OR Comments</span>
                <Textarea radius="none" value={message} onChange={(e) => setMessage(e.target.value)} type="textarea" variant="bordered" className="border-primary border" color="primary" placeholder="" />
              </div>
            </section>

            <Button color="primary" type="submit" className="uppercase text-[0.9rem] font-bold" radius="none">Submit Request</Button>
          </form>
          <section className="flex flex-col gap-2 md-screen:hidden">
            {propertyList.map((property, index) => (
              <div className={`w-24 h-24 relative ${selectedPropertyType === property.value ? "border-3 border-secondary" : "flex"}`} key={index}>
                <Image alt="" src={property.img} fill objectFit="cover" />
              </div>
            ))}
          </section>
        </section>

        <section className=" flex flex-col bg-white gap-5 p-7 sm-screen:p-5">
          <span className="text-gray-800">
            {"Alternatively, you can reach us through any of the following channels:"}
          </span>

          <section className=" grid grid-cols-2 gap-4 text-gray-800 sm-screen:grid-cols-1">
            {channelList.map((channel, index) => (
              <Link href={channel.href} key={index} target="_blank" className="flex flex-col justify-center border-l-4 border-l-primary transition-all items-center p-4 hover:bg-primary hover:text-white">
                <article className="text-4xl">
                  {channel.logo}
                </article>

                <article className="flex flex-col items-center">
                  <span className="text-lg capitalize font-bold">{channel.tag}</span>
                  <span>{channel.value}</span>
                </article>
              </Link>
            ))}
          </section>

          <section className="flex-1">
            <iframe className="h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2531362453183!2d-0.10123142564421984!3d5.819880830941097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bf5e49b2f29%3A0xa4ee42257f714fe!2sBijou%20Homes%20Ghana!5e0!3m2!1sen!2sgh!4v1763906508482!5m2!1sen!2sgh"
              width="100%"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </section>
        </section>

      </section>
      <FooterBox />
    </section>
  );
}

export default VisitBox;