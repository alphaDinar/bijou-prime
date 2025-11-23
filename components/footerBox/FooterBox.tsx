import { logo } from "@/src/external/imageLinks";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import Link from "next/link";

const FooterBox = () => {
  const blockList = [
    {
      tag: "bijou homes",
      links: [
        { tag: "home", href: "/" },
        { tag: "about us", href: "/about-us" },
        { tag: "gallery", href: "/gallery" },
        { tag: "contact us", href: "/contact-us" },
      ]
    },
    {
      tag: "properties",
      links: [
        { tag: "opal", href: "/" },
        { tag: "beryl", href: "/about-us" },
        { tag: "alexandra", href: "/gallery" },
        { tag: "jade", href: "/contact-us" },
      ]
    }
  ]

  const socialLinks = [
    { tag: "facebook", icon: <FaFacebookF />, href: "https://web.facebook.com/BijouHomesGh" },
    { tag: "instagram", icon: <FaInstagram />, href: "https://www.instagram.com/bijouhomes/" },
    { tag: "airbnb", icon: <FaAirbnb />, href: "https://airbnb.com" },
    { tag: "linkedin", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/bijou-homes-ghana/?viewAsMember=true" },
  ]

  return (
    <section className="box flex gap-20 py-20 justify-between flex-wrap md-screen:justify-around sm-screen:flex-col sm-screen:gap-5 sm-screen:py-10">
      <div className="relative w-28 h-18 sm-screen:h-16 sm-screen:w-24">
        <Image src={logo} objectFit="contain" alt="" fill />
      </div>

      <section className="flex gap-20 sm-screen:gap-5 sm-screen:flex-col">
        {blockList.map((block, index) => (
          <section key={index} className="grid gap-3">
            <span className="font-bold text-primary capitalize">{block.tag}</span>
            <article className="grid">
              {block.links.map((link, linkIndex) => (
                <Link href={link.href} className="hover:text-primary capitalize" key={linkIndex}>{link.tag}</Link>
              ))}
            </article>
          </section>
        ))}
      </section>

      <section className="grid gap-3">
        <span className="font-bold text-primary capitalize">Contact Information</span>
        <article className="grid sm-screen:gap-2">
          <Link href="" className="hover:text-primary capitalize grid">
            <span>Sales Office</span>
            <span>A: Appolonia City, Oyibi - Accra</span>
          </Link>

          <Link href="" className="hover:text-primary capitalize grid">
            <span>Office Line</span>
            <span>+233 550 382 008</span>
          </Link>

          <Link href="" className="hover:text-primary capitalize grid">
            <span>Office Mail</span>
            <span>info@bijouhomesgh.com</span>
          </Link>
        </article>
      </section>

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

export default FooterBox;