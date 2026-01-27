import Header from "./Header";
import MainSection from "./mainSection";
import Footer from "./Footer";
import Pagination from "./Pagination";

const App = () => {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <Header />
      <MainSection />
      <Pagination />
      <Footer />
    </div>
  );
};

export default App;
