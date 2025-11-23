import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";

const BlogBox = () => {
  const blogList = [
    { tag: "Shelter Afrique Visits Bijou Homes", href: "", img: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5ce6c30b455108a4eb748900_IMG_4611-min.JPG", },
    { tag: "Bijou Homes Takes on Obuasi & Kumasi", href: "", img: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5d52f2f06f0ecbc5b5c7a565__MG_9985-min.jpg" },
    { tag: "Bijou Homes Celebrates First Resident", href: "", img: "https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5d2eded9433de703cdfae85a_IMG_9559.jpg" }
  ]

  return (
    <section className="bg-[#eeeeee] box py-20 sm-screen:py-10 grid gap-10 sm-screen:gap-5">
      <section className=" grid grid-cols-3 gap-10  md-screen:gap-5 sm-screen:grid-cols-1 sm-screen:gap-7">
        {blogList.map((blog, index) => (
          <Link href={"/"} key={index} className="p-5 bg-white grid gap-5">
            <div className="h-64 relative">
              <Image alt="" src={blog.img} fill objectFit="cover" />
            </div>

            <small className="text-gray-500">BLOG</small>

            <span className="capitalize text-2xl heading text-primary">
              {blog.tag}
            </span>

            <Button radius="none" variant="bordered" className="flex relative group border w-max text-primary border-primary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3">
              <span className="flex z-20 uppercase text-[0.7rem] font-semibold group-hover:text-white">read this story</span>
              <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
            </Button>
          </Link>
        ))}
      </section>

      <Button as={Link} href="/blog" radius="none" variant="bordered" className="mx-auto flex relative group border w-max sm-screen:w-full text-primary border-primary sm-screen:py-3">
        <span className="flex z-20 uppercase text-[0.7rem] font-semibold group-hover:text-white">see all blogs</span>
        <div className="bg-transparent w-1 h-full flex absolute left-0 group-hover:bg-primary group-hover:w-full transition-all"></div>
      </Button>
    </section>
  );
}

export default BlogBox;