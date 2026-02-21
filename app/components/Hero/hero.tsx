const Hero = () => {
  return (
    <section className="max-w-[1100px] mx-auto py-12 px-6">

      <div className="flex flex-col gap-10">

        <div className="mx-auto w-4xl">

          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 text-center">
            Take the road to excellence
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">

            <p>
              We’ve been on the road for nearly <strong>35 years</strong> and we know that our dedication to quality, precision, and rigour has allowed us to go further with our partners, clients, and employees.
            </p>

            <p>
              Prince Logistique is an experienced team that includes more than <strong>550 drivers</strong> who transport and deliver goods throughout North America. Our company has the infrastructure necessary to support a variety of industries and sectors: food, medical, mechanics, construction, etc. We will support you in all your transportation projects.
            </p>

            <p>
              We have the technology, experience, and vision to take your project to the end of the line.
            </p>

          </div>
        </div>

        <div className="flex flex-row justify-end items-center md:items-end gap-18 w-4xl ">

          <img
            src="./images/Hero/pip.png"
            alt="partners in protection"
            className="max-h-[70px] object-contain"
          />

          <img
            src="./images/Hero/ctpat-logo-576x128px.png"
            alt="ctpat"
            className="max-h-[60px] object-contain"
          />

          <img
            src="./images/Hero/fastlogo.png"
            alt="fast express"
            className="max-h-[60px] object-contain"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;
