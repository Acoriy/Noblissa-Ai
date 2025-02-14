import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";

// pages :
import Home from "./Components/Home";
import LandingPageA from "./Components/LandingPageA";
import LandingPageB from "./Components/LandingPageB";
import CharginPage from "./Components/CharginPage";
import LandingPageSuggestions from "./Components/LandingPageSuggestions";
import LandingPageImages from "./Components/LandingPageImages";
import PageTelechareger from "./Components/PageTelechareger";

import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement (par exemple, appel API)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Temps de chargement 
  }, []);

  //  Si la page charge, afficher uniquement CharginPage
  if (isLoading) {
    return <CharginPage />;
  }
  
  return (
    <div>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/landingPageA" element={<LandingPageA/>}></Route>
         <Route path="/landingPageB" element={<LandingPageB/>}></Route>
         <Route path="/landingPageImages" element={<LandingPageImages/>}></Route>
         <Route path="/chargin" element={<CharginPage/>}></Route>
         <Route path="/suggestions" element={<LandingPageSuggestions/>}></Route>
         <Route path="/telechargez" element={<PageTelechareger/>}></Route>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
