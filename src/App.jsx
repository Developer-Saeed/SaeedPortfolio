import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMe from './components/AboutMe/AboutMe';
import MyServices from './components/MyServices/MyServices';
import MyLatestWork from './components/MyLatestWork/MyLatestWork';
import Contact from "./components/Contact/Contact";
const App = () => {
  return (
    <main>
      <Header />
      {/* 
         The components now handle their own IDs internally.
         No <Element> wrappers needed anymore.
         This is cleaner and follows standard HTML semantics.
      */}
      <HeroSection />
      <AboutMe />
      <MyServices />
      <MyLatestWork />
      <Contact />
    </main>
  );
};
export default App;