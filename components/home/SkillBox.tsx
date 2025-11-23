const SkillBox = () => {
  const skillList = [
    { tag: "value for money", desc: "Offering you high quality and elegant homes at competitive prices" },
    { tag: "innovative designs", desc: "Varied designs to meet different individual and family needs" },
    { tag: "Expandability", desc: "We offer homes that can be expanded - your house can grow with you" },
    { tag: "convenience", desc: "With access to all facilities such as shops, schools, hospitals and recreational centers, you enjoy the convenience and comfort of well planned community" },
    { tag: "Mortgage availability", desc: "Spread your home purchase payments over a period of 10 or 15 years with a mortgage from First National Bank Ghana, our exclusive mortgage financing partners" },
    { tag: "flexible payments", desc: "We offer several flexible payment options. This means you can own the house of your dreams comfortably. Our payment plan is for a duration of 6 to 12 months." }
  ]



  return (
    <section className="box grid gap-7 text-center py-12 sm-screen:py-6">
      <span className="text-5xl text-primary mx-auto heading capitalize z-50 sm-screen:text-5xl">Why bijou homes?</span>

      <section className="grid grid-cols-3 gap-5 sm-screen:grid-cols-1">
        {skillList.map((skill, index) => (
          <article className="flex flex-col items-center" key={index}>
            <div className="flex bg-pink-400 rounded-full text-2xl w-14 font-bold h-14 text-center justify-center items-center text-white"> 0{index + 1} </div>
            <article className="flex flex-col gap-1">
              <span className="text-[1.3rem] text-water font-bold capitalize">{skill.tag}</span>
              <span>
                {skill.desc}
              </span>
            </article>
          </article>
        ))}
      </section>
    </section>
  );
}

export default SkillBox;