import { useState } from "react";
import FilterDropdown from "./FilterDropdown";

// eslint-disable-next-line react/prop-types
const SearchWithFilter = ({ TitleBtn }) => {
  const [activeTab, setActiveTab] = useState("Cuisines");
  const [facadeType, setFacadeType] = useState("Blanc");
  const [facadeFinish, setFacadeFinish] = useState("Douceur");
  const [worktop, setWorktop] = useState("Bois");
  const [flooring, setFlooring] = useState("Bois");
  const [style, setStyle] = useState("Moderne");
  const [building, setBuilding] = useState("Appartement");
  const [landscape, setLandscape] = useState("Ville");
  const [atmosphere, setAtmosphere] = useState("Confortable");

  return (
    <div className="flex justify-center w-full px-4">
      <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto">
        {/* Navigation entre catégories */}
        <div className="flex justify-center items-center w-full gap-5 sm:gap-8 h-[50px] mb-6">
          {["Cuisines", "Salon", "Salle de bains"].map((tab) => (
            <span
              key={tab}
              className={`text-[14px] sm:text-[16px] cursor-pointer transition-colors ${
                activeTab === tab ? "text-Primary font-bold" : "font-light"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Filtres dynamiques */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-4">
            <FilterDropdown
              title="Type de façade"
              options={[
                "Blanc", "Gris", "Noir", "Beige", "Rouge", "Rouge clair",
                "Vert", "Vert clair", "Bleu", "Bleu clair", "Bois",
                "Pierre", "Béton", "Métallique",
              ]}
              selected={facadeType}
              setSelected={setFacadeType}
            />
            <FilterDropdown
              title="Finition de façades"
              options={["Douceur", "Brillant", "Mat"]}
              selected={facadeFinish}
              setSelected={setFacadeFinish}
            />
            <FilterDropdown
              title="Plan de travail"
              options={["Bois", "Pierre", "Béton", "Marbre"]}
              selected={worktop}
              setSelected={setWorktop}
            />
            <FilterDropdown
              title="Revêtement de sol"
              options={["Bois", "Pierre", "Béton", "Marbre"]}
              selected={flooring}
              setSelected={setFlooring}
            />
          </div>
          <div className="flex flex-col gap-4">
            <FilterDropdown
              title="Style"
              options={["Campagne", "Moderne", "Scandinave", "Industriel", "Méditerranéen"]}
              selected={style}
              setSelected={setStyle}
            />
            <FilterDropdown
              title="Bâtiment"
              options={["Maison", "Appartement", "Villa", "Loft", "Penthouse"]}
              selected={building}
              setSelected={setBuilding}
            />
            <FilterDropdown
              title="Paysage"
              options={["Campagne", "Banlieue", "Ville", "Côte", "Montagnes", "Lac"]}
              selected={landscape}
              setSelected={setLandscape}
            />
            <FilterDropdown
              title="Atmosphère"
              options={["Animé", "Joyeux", "Confortable", "Endormi", "Apaisant", "Rugueux", "Coloré", "Envoûtant"]}
              selected={atmosphere}
              setSelected={setAtmosphere}
            />
          </div>
        </div>

        {/* Bouton de validation */}
        <button className="w-full max-w-[300px] bg-Primary hover:bg-HoverColor transition-all text-white text-[12px] font-normal rounded-full h-[45px] mt-8 py-[10px]">
          {TitleBtn}
        </button>
      </div>
    </div>
  );
};

export default SearchWithFilter;
