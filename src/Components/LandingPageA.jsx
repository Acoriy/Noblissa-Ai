import HeaderPage from "../Layouts/HeaderPage"; 
import imaginationHero from "../assets/Img/heroImagination.png";
import DecoverSection from "../Layouts/DecoverSection";
import bgLandingPage from "../assets/Icons/bgLndingPageA.svg";
import SearchWithFilter from "./SearchWithFilter";

const LandingPageA = () => {
  const TitleBtn = "CRÉER";

  return (
    <div className="font-HelveticaNeue flex flex-col min-h-screen">
      <HeaderPage />

      {/* Section principale avec image de fond */}
      <div
        className="w-full flex flex-col bg-cover bg-center bg-no-repeat flex-grow"
        style={{ backgroundImage: `url(${bgLandingPage})` }}
      >
        {/* Image principale */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
          <img
            src={imaginationHero}
            alt="Imagination"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu principal centré */}
        <div className="flex flex-col items-center justify-center flex-grow mx-auto bg-white/50 backdrop-blur-md p-6 rounded-lg max-w-2xl w-full">
          {/* Texte principal */}
          <div className="w-full space-y-5 text-center px-4">
            <h1 className="font-bodoni text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
              Imaginons votre prochaine lieu de vie avec l&apos;IA
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-[150%] font-light">
              En quelques clics, notre assistant virtuel vous propose des
              visualisations adaptées à vos envies pour nourrir votre
              inspiration et démarrer votre projet.
            </p>
          </div>

          {/* Section de recherche centrée */}
          <div className="flex justify-center w-full">
            <SearchWithFilter TitleBtn={TitleBtn} />
          </div>
        </div>
      </div>

      {/* Section découverte */}
      <DecoverSection />
    </div>
  );
};

export default LandingPageA;
