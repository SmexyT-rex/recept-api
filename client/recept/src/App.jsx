import Header from "./Header";
import MainSection from "./mainSection";
import Footer from "./Footer";
import Pagination from "./Pagination";

const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Pagination />
      <Footer />
    </>
  );
};

try {
  const response = await fetch("http://localhost:3000/recipes");

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
} catch (err) {
  console.error(err.message);
}

export default App;
