import cons1 from "../assets/Img/cons1.png";
import cons2 from "../assets/Img/cons2.png";
import cons3 from "../assets/Img/cons3.png";
import iconDesignRight from "../assets/Icons/iconDesignRight.svg";

const Concepteure = () => {
  return (
    <div className="w-full h-auto p-[20px] flex flex-col md:flex-row items-center gap-[40px] relative md:pl-[40px]">
      {/* Section des images */}
      <div className="flex flex-col md:flex-row gap-[20px] md:w-[630px] md:h-[630px] w-full justify-center items-center">
        <div className="w-[170px] h-[273px] md:w-[305px] md:h-[491px] relative">
          <img
            src={cons3}
            alt="image"
            className="w-full h-full bg-cover bg-center absolute left-0 bottom-0"
          />
        </div>
        <div className="flex flex-col w-[181px] h-[373px] md:w-[305px] md:h-[631px] gap-[20px]">
          <img
            src={cons1}
            alt="image"
            className="bg-cover bg-center w-[119px] h-[119px] md:w-[230px] md:h-[230px]"
          />
          <img
            src={cons2}
            alt="image"
            className="bg-cover bg-center w-[170px] h-[170px] md:w-[305px] md:h-[305px]"
          />
        </div>
      </div>

      {/* Section texte et boutons */}
      <div className="flex justify-center md:w-[630px] md:h-[630px] w-full">
        <div className="w-full max-w-[415px] flex flex-col gap-[25px]">
          <h1 className="font-light text-[28px] sm:text-[40px] md:text-[60px] leading-[100%] text-start">
            Rencontrez votre concepteur
          </h1>
          <ul className="font-light text-[16px] sm:text-[18px] list-disc pl-5">
            <li>Explorez nos aménagements & matières.</li>
            <li>Bénéficiez de conseils techniques et créatifs.</li>
            <li>Recevez des propositions et un devis gratuit pour votre projet.</li>
          </ul>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-[20px] mx-auto sm:mx-0">
            <button className="w-[200px] h-[40px] px-[20px]  py-[10px] rounded-full text-[#fff] text-[12px] sm:text-[14px] bg-Primary hover:bg-HoverColor tracking-[3%] font-normal">
              PRENDRE RENDEZ-VOUS
            </button>
            <button className="w-[200px] h-[40px] px-[10px] py-[10px] rounded-full text-[12px] sm:text-[14px] border border-Primary border-x-2 border-y-2 text-Primary tracking-[3%]  font-normal hover:text-HoverColor hover:border-HoverColor">
              TROUVER VOTRE MAGASIN
            </button>
          </div>

          {/* Icon Design Right */}
          <img
            src={iconDesignRight}
            alt="icon"
            className="absolute right-0 w-[200px] sm:w-[257px] h-[300px] sm:h-[469px] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Concepteure;
