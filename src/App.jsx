import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";

function App() {
  return (
    <>
      <div className="lg:px-72 py-4">
        <Header />
        <Banner />
        <Popular />
        <Recommended />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default App;
