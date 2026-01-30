import Header from "./Header";
import MainSection from "./mainSection";
import Footer from "./Footer";
import Pagination from "./Pagination";
import NewRecipeModule from "./NewRecipeModule";

const App = () => {
  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <Header />
      <MainSection />
      <NewRecipeModule />
      <Pagination />
      <Footer />
    </div>
  );
};

export default App;
