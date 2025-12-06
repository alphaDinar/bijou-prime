import FooterBox from "@/components/footerBox/FooterBox";
import AboutBox from "@/components/home/AboutBox";
import BlogBox from "@/components/home/BlogBox";
import BookBox from "@/components/home/BookBox";
import ContactBox from "@/components/home/ContactBox";
import GalleryBox from "@/components/home/GalleryBox";
import HeadBox from "@/components/home/HeadBox";
import PlanBox from "@/components/home/PlanBox";
import PropertyBox from "@/components/home/PropertyBox";
import SkillBox from "@/components/home/SkillBox";
import StatBox from "@/components/home/StatBox";
import PropertyModal from "@/components/propertyModal/PropertyModal";

const Home = () => {
  return (
    <section className="grid gap-20 sm-screen:gap-10">
      <PropertyModal />
      <section>
        <HeadBox />
        <StatBox />
      </section>

      <AboutBox />

      <PropertyBox />

      <PlanBox />

      <GalleryBox />

      <BookBox />

      <SkillBox />


      <section>
        <ContactBox />
        <BlogBox />
        <FooterBox />
      </section>

    </section>
  );
}

export default Home;