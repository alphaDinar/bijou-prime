"use client";
import { logo } from "@/src/external/imageLinks";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const TopNav = () => {
  const pathname = usePathname();

  const [navToggled, setNavToggled] = useState(false);

  const toggleNav = () => {
    setNavToggled(!navToggled)
  }

  const navLinks = [
    { tag: "home", href: "/" },
    { tag: "about us", href: "/about-us" },
    { tag: "properties", href: "/#properties" },
    { tag: "gallery", href: "/gallery" },
    { tag: "contact us", href: "/#contact-us" },
  ]

  const socialLinks = [
    { tag: "facebook", icon: <FaFacebookF />, href: "https://web.facebook.com/BijouHomesGh" },
    { tag: "instagram", icon: <FaInstagram />, href: "https://www.instagram.com/bijouhomes/" },
    { tag: "airbnb", icon: <FaAirbnb />, href: "https://airbnb.com" },
    { tag: "linkedin", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/bijou-homes-ghana/?viewAsMember=true" },
  ]

  useEffect(() => {
    setNavToggled(false);
  }, [pathname])

  return (
    <section className="flex box w-full z-[1000] items-center justify-between bg-[#fbfbfb] py-1 absolute top-4 tab-screen:flex-col tab-screen:gap-2 tab-screen:py-4 tab-screen:top-0 sm-screen:gap-4">
      <section className="flex justify-between items-center sm-screen:w-full">
        <Link href={"/"} className="relative w-28 h-18 sm-screen:h-16 sm-screen:w-24">
          <Image src={logo} objectFit="contain" alt="" fill />
        </Link>

        <Button onPress={toggleNav} isIconOnly variant="bordered" color="primary" className="hidden sm-screen:flex">
          <FiMenu size={25} />
        </Button>
      </section>



      <article className={`flex gap-2 z-[2000] sm-screen:fixed sm-screen:flex-col  sm-screen:bg-primary sm-screen:h-full sm-screen:w-full sm-screen:top-0 sm-screen:p-10 transition-all ${navToggled ? "sm-screen:right-0" : "sm-screen:-right-full"}`}>
        <IoCloseOutline onClick={toggleNav} className="hidden sm-screen:flex absolute top-6 right-6 text-[2rem] text-white" />

        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`mx-2 sm-screen:text-white flex ${link.href === pathname ? "text-primary" : "text-gray-800"} font-extrabold sm-screen:font-bold uppercase text-[0.8rem] p-2 sm-screen:text-[0.9rem]`}
          >
            {link.tag}
          </Link>
        ))}

        <Button as={Link} href="/book-viewing" radius="none" variant="bordered" className="flex relative group mx-4 border text-primary w-max-content border-primary sm-screen:text-white sm-screen:border-white sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3">
          <span className="flex z-20 uppercase text-[0.8rem] font-extrabold group-hover:text-white">Book Viewing</span>
          <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
        </Button>
      </article>

      {/* <Button className="hidden sm-screen:flex" isIconOnly> */}

      {/* </Button> */}

      <article className="flex">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mx-2 text-[1.3rem] hover:text-primary transition-colors"
          >
            {link.icon}
          </Link>
        ))}
      </article>
    </section>
  );
}

export default TopNav;