import Card from "./Card";
import { useState, useEffect } from "react";
import fetchData from "./fetchData";

const MainSection = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await fetchData();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <>
      <div
        id="main-section"
        className={`min-h-screen justify-center items-start grid gap-10 md:gap-20 lg:gap-25 xl:gap-40`}
      >
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              recipeTitle={recipe.name}
              recipeDescription={recipe.description}
              ingredients={recipe.ingredients.map((ing) => ing.name).join(", ")}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainSection;
