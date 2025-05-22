import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HeroComponent from "./Components/HeroComponent/HeroComponent";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import DreamHome from "./Components/DreamHome/DreamHome";
import Trending from "./Components/Trending/Trending";
import RealEstate from "./Components/RealEstate/RealEstate";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route></Route>
      </Routes> */}
      <HeroComponent />
      <HowItWorks />
      <DreamHome />
      <Trending />
      <RealEstate />
      <Footer />
    </>
  );
}

export default App;
