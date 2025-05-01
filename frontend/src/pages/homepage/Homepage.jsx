

import Hero from "../../components/local/homepage/hero/Hero.jsx";
import Categories from "../../components/local/homepage/categories/Categories.jsx";
import TopRR from "../../components/local/homepage/topRR/TopRR.jsx";
import StartNow from "../../components/local/homepage/startNow/StartNow.jsx";
import Cta from "../../components/local/homepage/cta/Cta.jsx";


const Homepage = () => {
    return (
      <>
     
     <main>
        <Hero/>
         <Categories/>
         <TopRR/>
         <StartNow/>
         <Cta/>
     </main>
   
     </>
    );
};

export default Homepage;