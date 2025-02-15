import HeaderPage from "../Layouts/HeaderPage";
import DecoverSection from "../Layouts/DecoverSection";
import imaginationHero from "../assets/Img/heroImagination.png";
// import { IoIosArrowDown } from "react-icons/io";
import SearchWithFilter from "./SearchWithFilter";

const LandingPageB = () => {
  const TitleBtn = "CRÉER";
  return (
    <div>
      <HeaderPage />

      {/* section 1 : imaginons */}
      <div
        style={{ backgroundImage: `url(${imaginationHero})` }}
        className="w-full h-[350px] sm:h-[450px] bg-cover bg-center flex flex-col items-center justify-end"
      >
        <div className="flex flex-col justify-center items-center gap-5 w-full max-w-[90%] sm:max-w-[841px] h-[182px] min-h-[243px] text-white bg-[rgba(255,255,255,0.2)] backdrop-blur-sm p-6 rounded-xl">
          <h1 className="text-[24px] sm:text-[40px] font-normal font-bodoni leading-[110%] text-center">
            Imaginons Votre prochain lieu de vie avec l&apos;IA
          </h1>
          <p className="text-center leading-[150%] text-[12px] sm:text-[16px] font-normal px-4 sm:px-6">
            En quelques clics, créez des images pour nourrir votre inspiration
            selon vos envies et imaginez votre projet.
          </p>
        </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col gap-[10px] mx-auto"></div>
      
      {/* search avec filtre */}
      <SearchWithFilter TitleBtn={TitleBtn} />

      <DecoverSection />
    </div>
  );
};

export default LandingPageB;
