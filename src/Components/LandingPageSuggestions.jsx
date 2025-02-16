import DecoverSection from "../Layouts/DecoverSection";
import HeaderPage from "../Layouts/HeaderPage";
import Imaginion from "../Layouts/Imaginion";
import SearchWithFilter from "./SearchWithFilter";
import Textes from "../Layouts/Textes";

const LandingPageSuggestions = () => {
  const TitleBtn = "GÉNÉRER PLUS D’IMAGES";

  return (
    <div className="flex flex-col min-h-screen ">
      <HeaderPage />

      {/* Contenu de la page */}
      <div className="flex flex-col md:gap-[40px]">
        {/* Section 1 */}
        <Imaginion />

        {/* Section 2 */}
        <div>
          <Textes />
        </div>

        {/* Section 3 : SearchWithFilter centré */}
        <div className="flex-grow flex flex-col justify-center items-center w-full px-4">
          <SearchWithFilter TitleBtn={TitleBtn} />
        </div>

        {/* Section 4 */}
        <DecoverSection />
      </div>
    </div>
  );
};

export default LandingPageSuggestions;
