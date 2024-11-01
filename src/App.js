import logo from './logo.svg';
import './App.css';
import NavbarSection from './Components/NavbarSection';
import MainSection from './Components/MainSection';
import SecondMaind from './Components/SecondMaind';
import FourWrapCard from './Components/FourWrapCard';
import NoWrapCards from './Components/NoWrapCards';
import FifthSection from './Components/FifthSection';
import SixthSection from './Components/SixthSection';
import SeventhSection from './Components/SeventhSection';
import EightSection from './Components/EightSection';
import NinethSection from './Components/NinethSection';
import TenthSection from './Components/TenthSection';
import ElevenSection from './Components/ElevenSection';
import TwelveSection from './Components/TwelveSection';

function App() {
  return (
    <>
    <div className="second-part">
      <NavbarSection/>
      <MainSection/>
      <SecondMaind/>
      <FourWrapCard/>
    </div>
     <NoWrapCards/>
    <div className='second-part'>
    <FifthSection/>
    </div>
    <SixthSection/>
    {/* <div className='second-part'>
        <SeventhSection/>
        <EightSection/>
        <NinethSection/>
        <TenthSection/>
        <ElevenSection/>
        <TwelveSection/>
    </div> */}
    </>
  );
}

export default App;
