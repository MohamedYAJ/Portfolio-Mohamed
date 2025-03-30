import { useState } from 'react';
import { LoadingScreen } from "./componants/LoadingScreen";
import "./app.css";
import "./index.css";
import Navbar from "./componants/sections/Navbar";
import Home from "./componants/sections/Home";
import Portfolio from "./componants/sections/Portfolio";
import Experience from "./componants/sections/Experiences";
import Contact from "./componants/sections/contact";

function App() {  
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div>
          <Navbar />
          <Home />
          <Portfolio />
          <Experience />
          <Contact />
        </div>
      )}
    </>
  );
}


export default App; 
