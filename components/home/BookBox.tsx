import { callLink } from "@/src/external/quickLinks";
import { Button } from "@heroui/button";
import Link from "next/link";

const BookBox = () => {
  return (
    <section className={`py-20 sm-screen:py-12 bg-fixed sm-screen:text-center relative flex flex-col items-center justify-center gap-7 bg-[url("https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b7fc54fdcf8e406b1711a2c_Lable_wall-min.png")]`}>
      <article className="absolute top-0 left-0 bg-black w-full h-full flex opacity-50">
      </article>

      <span className="text-5xl text-white heading capitalize z-50 sm-screen:text-5xl">Want a bijou home?</span>

      <article className="flex gap-5 items-center z-50 sm-screen:flex-col sm-screen:gap-2">
        <Button as={Link} href="/book-viewing" radius="none" className="flex text-primary bg-secondary sm-screen:mt-4 sm-screen:mx-0 sm-screen:px-6 sm-screen:py-3">
          <span className="flex z-20 uppercase text-[0.8rem] font-extrabold">Book a visit now</span>
        </Button>

        <span className="text-white">OR</span>

        <Button as={Link} radius="none" color="primary" href={callLink} className="text-white"> CALL: +233 550 382 008</Button>
      </article>
    </section>
  );
}

export default BookBox;