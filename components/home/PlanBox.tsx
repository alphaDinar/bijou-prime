import { headBoxImages, planImage } from "@/src/external/imageLinks";
import Image from "next/image";

const PlanBox = () => {

  const bgPlace = "https://res.cloudinary.com/dvnemzw0z/image/upload/v1758566871/bijou/BH-FNB-67_fxujbq.jpg"
  return (
    <section className={`h-[100vh] md-screen:h-max flex items-center justify-center bg-fixed bg-cover bg-[url("https://cdn.prod.website-files.com/5b7fc1dce825746280869575/5b7fc51d8d1590c519e2daa5_terrace-min.png")] md-screen:flex-col md-screen:box`} >
      <section className="grid grid-cols-2 w-2/3 md-screen:flex md-screen:flex-col md-screen:w-full">
        <section className="relative h-[80vh] md-screen:h-96">
          <Image alt="" fill objectFit="cover" src={planImage} />
        </section>
        <section className="grid gap-5 p-10 bg-[#1a1a19]">
          <span className="capitalize text-5xl heading text-gray-400 md-screen:text-4xl">
            {"bijou homes within Appolonia city"}
          </span>

          <article className="grid gap-2 text-white">
            <span>
              {"Appolonia City is a 2,325-acre (941-hectare) mixed-use and mixed-income urban development in Greater Accra. Appolonia City is approximately the size of Tema Communities 1 to 6 combined (2,325 acres)"}
            </span>
            <span>
              {"The project is being developed for residential properties, retail, commercial centers, schools, healthcare and social infrastructure"}
            </span>
            <span>
              {"Bijou Homes is a gated residential community of 112 elegant and affordable homes. It is first class urban development with well-planned infrastructure and amenities in a secure and children friendly community."}
            </span>
          </article>
        </section>
      </section>
    </section>
  );
}

export default PlanBox;