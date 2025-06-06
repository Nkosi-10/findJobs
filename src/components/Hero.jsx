/* eslint-disable react/prop-types */

const Hero = ({title ="Build With Developer's " , subtitle ="Get the best Software </>  Engineering Job in the world",}) => {
  return (
    <section className="bg-cyan-950 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
                {subtitle}          </p>
        </div>
      </div>
    </section>

  );
};

export default Hero
