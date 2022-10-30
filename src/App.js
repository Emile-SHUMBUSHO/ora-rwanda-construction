import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/carousel";
import { useContext } from "react";
import { themeContext } from "./Context";
import About from "./components/About/About";
import Heading from "./components/Headings/headings";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const slides = [
    {
      url: "https://pinoyhousedesigns.com/wp-content/uploads/2018/02/DESIGN.SHD-2017032-DESIGN4_View03-700x350.jpg",
      title: "beach",
    },
    {
      url: "https://www.houseanddecors.com/wp-content/uploads/2020/01/Small-House-Design-Plans-7x7-with-2-Bedrooms-1-678x381.jpg",
      title: "beach",
    },
  ];
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Carousel slides={slides} />
      <About />
      <Heading headings={"Services"} />
      <Services />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
