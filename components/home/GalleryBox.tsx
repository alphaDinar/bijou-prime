import Image from "next/image";
import Link from "next/link";

const GalleryBox = () => {
  return (
    <section className="box flex flex-col items-center gap-10 mob-screen:gap-5">
      <span className="heading text-primary text-6xl sm-screen:text-4xl">Our Gallery</span>

      <section className="w-full h-[70vh] mob-screen:h-auto grid grid-cols-2 gap-5 md-screen:grid-cols-1">
        <section className="grid grid-cols-[6fr_4fr] gap-5 mob-screen:grid-cols-1">
          <article className="relative mob-screen:h-72">
            <Image alt="" objectFit="cover" src={"https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5c06656fb7a821a944f975af_BH-12.jpg"} fill />
          </article>
          <section className="grid gap-5">
            <article className="relative mob-screen:h-52">
              <Image alt="" objectFit="cover" src={"https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5c06b6b1c5a21512558dded2_BH-34.jpg"} fill />
            </article>
            <article className="relative mob-screen:h-52">
              <Image alt="" objectFit="cover" src={"https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5c06b6b1d9302b809ac83859_BH-31.jpg"} fill />
            </article>
          </section>
        </section>

        <section className="grid grid-cols-[6fr_4fr] gap-5 mob-screen:grid-cols-1">
          <article className="relative mob-screen:h-72">
            <Image alt="" objectFit="cover" src={"https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5d2eded9433de703cdfae85a_IMG_9559.jpg"} fill />
          </article>
          <section className="grid gap-5">
            <article className="relative mob-screen:h-52">
              <Image alt="" objectFit="cover" src={"https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5c06b6ad043ce6b35b185666_BH-21.jpg"} fill />
            </article>
            <Link href="/gallery" className="relative flex mob-screen:h-52">
              <article className="bg-black absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center opacity-70">
              </article>
              <span className="text-white capitalize underline m-auto z-100 flex">See All gallery Photos</span>
              <Image alt="" objectFit="cover" src={"https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5c06b6adf50d569c2ec8ee8d_BH-2.jpg"} fill />
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
}

export default GalleryBox;