import BatterySection from "./assets/section/BatterySection";
import CameraSection from "./assets/section/CameraSection";
import ColorSection from "./assets/section/ColorSection";
import DesignSection from "./assets/section/DesignSection";
import DisplaySection from "./assets/section/DisplaySection";
import HeroSection from "./assets/section/HeroSection";
import PhoneModel from "./assets/section/PhoneModel";
import PricingSection from "./assets/section/PricingSection";
import ProcessorSection from "./assets/section/ProcessorSection";
import Quote from "./assets/section/Quote";
import { ColorContextProvider } from "./context/ColorContext";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Quote/>
      <PhoneModel/>
      <HeroSection/>
      <DesignSection/>
      <DisplaySection/>
      <ProcessorSection/>
      <BatterySection/>
      <ColorContextProvider>
      <ColorSection/>
      <CameraSection/>
      <PricingSection/>
      </ColorContextProvider>
    </>
  );
}

export default App;
