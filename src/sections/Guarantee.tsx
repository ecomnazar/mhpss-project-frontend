const names = ["Adaptability", "Relevance", "Certification"];

const Guarantee = () => {
  return (
    <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-x-4 py-8">
      {names.map((name, index) => {
        return (
          <div
            key={index}
            className="p-4 text-center flex flex-col gap-y-2 relative"
          >
            <img
              className="w-[30px] mx-auto mb-4 relative z-10"
              src={`/images/${name.toLowerCase()}.svg`}
              alt=""
            />
            <div className="w-[40px] h-[40px] bg-[#E8F5E9] absolute top-[5%] left-1/2 z-2 rounded-md"></div>
            <h3 className="text-black font-[600] text-2xl">{name}</h3>
            <p className="max-w-[300px] text-lightDark text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem odio.</p>
          </div>
        );
      })}
    </section>
  );
};

export default Guarantee;
