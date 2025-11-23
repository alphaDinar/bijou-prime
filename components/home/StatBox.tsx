const StatBox = () => {
  const statList = [
    { tag: "acreage of service land", value: "6.5" },
    { tag: "properties already reserved", value: "94%" },
    { tag: "years leasehold with no litigation", value: "85" },
    { tag: "security availability", value: "24/7" },
  ]

  return (
    <>
      <section className="bg-[#6d6e71] grid  grid-cols-4 box py-10 sm-screen:grid-cols-2 sm-screen:hidden">
        {statList.map((stat, index) => (
          <article key={index} className="flex flex-col text-center text-white">
            <span className="text-6xl heading sm-screen:text-4xl">{stat.value}</span>
            <span>{stat.tag}</span>
          </article>
        ))}
      </section>

      <section className="bg-[#6d6e71] grid-cols-2 box py-7 sm-screen:grid-cols-2 sm-screen:gap-0 hidden sm-screen:grid">
        <article className="flex flex-col text-center text-white border-r border-dashed border-b p-3">
          <span className="text-6xl heading sm-screen:text-4xl">{statList[0].value}</span>
          <span>{statList[0].tag}</span>
        </article>
        <article className="flex flex-col text-center text-white border-b border-dashed p-3">
          <span className="text-6xl heading sm-screen:text-4xl">{statList[1].value}</span>
          <span>{statList[1].tag}</span>
        </article>
        <article className="flex flex-col text-center text-white border-r border-dashed  p-3">
          <span className="text-6xl heading sm-screen:text-4xl">{statList[2].value}</span>
          <span>{statList[2].tag}</span>
        </article>
        <article className="flex flex-col text-center text-white  p-3">
          <span className="text-6xl heading sm-screen:text-4xl">{statList[3].value}</span>
          <span>{statList[3].tag}</span>
        </article>
      </section>
    </>
  );
}

export default StatBox;