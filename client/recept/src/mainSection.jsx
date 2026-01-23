import Card from "./Card";

const MainSection = () => {
  return (
    <>
      <div className="justify-center items-center mt-10 mb-10 grid gap-10 md:gap-20 lg:gap-30 xl:gap-40">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default MainSection;
