import DesignLeft from "../assets/Icons/iconDesignLeft.svg";
import imageCatalogue from "../assets/Img/imageCatalogue.png";

const DecoverSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full overflow-hidden">
      {/* Première section avec texte et bouton */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:pb-[50px] pr-[40px]">
        <img
          src={DesignLeft}
          alt="icon"
          className="hidden md:block w-[80px] md:w-[120px] h-auto"
        />
        <div className="flex flex-col items-start justify-center gap-6 md:gap-10 px-6 md:px-12 lg:px-24 py-8 md:py-12 w-full md:w-auto">
          <h1 className="text-[28px] sm:text-[35px] md:text-[50px] lg:text-[60px] font-normal font-bodoni leading-tight md:leading-snug text-Textcolor text-center md:text-left min-w-[270px] md:w-[534px] mx-auto">
            Découvrez tous nos univers dans notre nouveau catalogue.
          </h1>
          <button className="font-normal text-xs md:text-sm tracking-wide text-white w-[225px] md:w-[245px] h-10 md:h-12 rounded-full bg-Primary px-[20px] py-[10px] hover:bg-HoverColor transition-colors duration-300 ease-in-out mx-auto md:mx-0">
            TÉLÉCHARGER LE CATALOGUE
          </button>
        </div>
      </div>

      {/* Section image catalogue */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[560px] flex justify-center">
        <img
          src={imageCatalogue}
          alt="image"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>
    </div>
  );
};

export default DecoverSection;
