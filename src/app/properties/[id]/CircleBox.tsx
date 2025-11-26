"use client";
import { FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type CircleBoxProps = {
  amount: string;
  tag: string
}
const CircleBox: FC<CircleBoxProps> = ({ amount, tag }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <article data-aos="fade-up" className="w-max flex flex-col items-center gap-2 text-center ">
      <article className="text-[1.6rem] font-semibold border-3 border-primary w-30 h-30 rounded-full items-center justify-center flex">{amount}</article>
      <span className="uppercase w-30 flex text-[0.8rem] text-primary font-extrabold">{tag}</span>
    </article>
  );
}

export default CircleBox;