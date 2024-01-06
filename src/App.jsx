import Banner from "./components/Banner";
import Header from "./components/Header";
import Popular from "./components/Popular";

function App() {
  return (
    <>
      <div className="lg:px-72 py-4">
        <Header />
        <Banner />
        <Popular />
      </div>
    </>
  );
}

export default App;
