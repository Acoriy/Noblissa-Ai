import { Link } from "react-router-dom";
import Concepteure from "../Layouts/Concepteure";
import DecoverSection from "../Layouts/DecoverSection";
import HeaderPage from "../Layouts/HeaderPage";
import HeroTelechargez from "../assets/Img/HeroTelecharger.png";

const PageTelechareger = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPage />

      {/* Section Image */}
      <div
        style={{ backgroundImage: `url(${HeroTelechargez})` }}
        className="w-full h-[300px] sm:h-[450px] bg-cover bg-center flex items-center justify-center"
      >
        <div className="w-[90%] max-w-[841px] bg-[rgba(255,255,255,0.2)] backdrop-blur-sm p-6 rounded-xl text-white text-center">
          <h1 className="text-xl sm:text-4xl font-bodoni leading-tight">
            Téléchargez <br /> votre visuel d&apos;inspiration
          </h1>
        </div>
      </div>

      {/* Formulaire */}
      <form className="flex flex-col gap-6 p-5 sm:p-8 max-w-lg mx-auto w-full">
        {["Nom", "Prénom", "Mail", "Téléphone", "Code postal"].map((label, index) => (
          <div key={index} className="relative w-full">
            <input
              type={label === "Téléphone" ? "number" : "text"}
              required
              className="peer w-full py-2 border-b-2 border-gray-400 bg-transparent text-base text-gray-700 focus:outline-none focus:border-Primary"
            />
            <label className="absolute left-0 bottom-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:opacity-100 peer-focus:-translate-y-6 peer-focus:text-Primary peer-focus:opacity-100">
              {label}*
            </label>
          </div>
        ))}

        {/* Consentement */}
        <div className="flex flex-col gap-3 text-xs sm:text-sm">
          <span className="text-gray-600">* Champs obligatoires</span>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="w-4 h-4 mt-1" />
            <p className="text-gray-700">
              En utilisant ce formulaire, vous consentez au stockage et au traitement de vos données afin de répondre à votre demande. Consultez notre politique de confidentialité.*
            </p>
          </div>
        </div>

        {/* Bouton */}
        <div className="flex justify-center">
          <Link to="/">
            <button className="px-6 py-2 text-white rounded-full bg-Primary hover:bg-HoverColor transition-transform duration-300 ease-in-out">
              TÉLÉCHARGER
            </button>
          </Link>
        </div>
      </form>

      <Concepteure />
      <DecoverSection />
    </div>
  );
};

export default PageTelechareger;
