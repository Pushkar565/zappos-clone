import Global from "../components/Global";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage_Content from "../components/HomePage_Content";

const Home = () => {
  return (
    <>
      <Global />

      {/* Navbar */}
      <Navbar />

      <HomePage_Content />

      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
