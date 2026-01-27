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
      <div className="flex grow flex-col items-center">
        <div id="main-section" className={`justify-center`}>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                recipeTitle={recipe.name}
                recipeDescription={recipe.description}
                ingredients={recipe.ingredients
                  .map((ing) => ing.name)
                  .join(", ")}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
