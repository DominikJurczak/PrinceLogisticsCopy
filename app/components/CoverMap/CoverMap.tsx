import { Link } from "react-router";

const CoverMap = () => {
  return (
    <section className="w-full">
      <Link
        to="/"
        className="relative block w-full h-96 sm:h-[200px] bg-cover bg-center overflow-hidden group"
        style={{ backgroundImage: "url('/images/CoverMap/map-cover.png')" }} 
      >

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
          <span className="text-white text-5xl sm:text-3xl font-bold text-center px-4">
            CHECK OUT ALL THE TERRITORIES COVERED
          </span>
        </div>
      </Link>
    </section>
  );
};

export default CoverMap;
