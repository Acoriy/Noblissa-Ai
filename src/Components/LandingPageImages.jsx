// import { IoIosArrowDown } from "react-icons/io";
import HeaderPage from "../Layouts/HeaderPage";
import DecoverSection from "../Layouts/DecoverSection";

// Data section Image :
import Image1 from "../assets/Img/Image 1.png";
import Image2 from "../assets/Img/Image 2.png";
import Image3 from "../assets/Img/Image 3.png";
import Image4 from "../assets/Img/Image 4.png";
import SearchWithFilter from "./SearchWithFilter";
import Imaginion from "../Layouts/Imaginion";
import { useState } from "react";

const DataImages = [Image1, Image2, Image3, Image4];

const LandingPageImages = () => {
  const TitleBtn = "GÉNÉRER PLUS D’IMAGES";
  const [activeTab, setActiveTab] = useState("Images créées");
  return (
    <div className="flex flex-col ">
      <HeaderPage />
      {/* contenu de la page */}
      <div className="flex flex-col gap-[15px]">
        {/* section 1 : imaginons */}
        <Imaginion />

        <section className="mx-auto flex flex-col items-center gap-6 pt-6 w-full px-4 ">
          {/* En-tête avec les titres */}
          <div className="flex flex-row flex-wrap w-full justify-center gap-4 md:gap-10 md:w-auto">
            {["Images créées", "Suggestions Noblessa"].map((tab) => (
              <span
                key={tab}
                className={`text-[16px] cursor-pointer transition-colors ${
                  activeTab === tab ? "text-Primary font-bold" : "font-light"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Grille responsive des images */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-[1240px] justify-center">
            {DataImages.map((img, index) => (
              <div
                key={index}
                className="w-full h-[200px] sm:h-[250px] md:h-[305px] lg:h-[340px]"
              >
                <img
                  src={img}
                  alt="image"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>

          {/* Bouton de téléchargement */}
          <button className="bg-Primary hover:bg-HoverColor transition-transform duration-300 ease-in-out text-white text-[12px] tracking-wide font-normal rounded-full w-[140px] h-[40px] mt-6">
            TÉLÉCHARGER
          </button>
        </section>

        {/* DropDown section */}
        <SearchWithFilter TitleBtn={TitleBtn} />
        {/* discover section */}
        <DecoverSection />
      </div>
    </div>
  );
};

export default LandingPageImages;
