import { useState } from "react";
import Banner from "./component/Banner/Banner";
import Header from "./component/Header/Header";
import Ourrecipe from "./component/Ourrecipe/Ourrecipe";
import Recipes from "./component/Recipes/Recipes";
import Sidebar from "./component/Sidebar/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalorie, setTotalCalorie] = useState(0);

  const addRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Item already pending!");
    }
  };

  const handelRemove = (id) => {
    //find items
    const deleteRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    //remove items
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deleteRecipe]);
  };

  const calculateTimeAndCalories = (time, calorie) => {
    setTotalTime(totalTime + time);
    setTotalCalorie(totalCalorie + calorie);
  };
  return (
    <div>
      <Header></Header>
      <main className="container mx-auto px-3">
        <Banner></Banner>
        <Ourrecipe></Ourrecipe>
        <section className="grid sm:grid-cols-3 grid-cols-1 gap-5 py-10 ">
          {/* main recipe section */}
          <Recipes addRecipeQueue={addRecipeQueue}></Recipes>
          {/* sidebar */}
          <Sidebar
            recipeQueue={recipeQueue}
            handelRemove={handelRemove}
            preparedRecipe={preparedRecipe}
            calculateTimeAndCalories={calculateTimeAndCalories}
            totalTime={totalTime}
            totalCalorie={totalCalorie}
          ></Sidebar>
        </section>
      </main>
    </div>
  );
};

export default App;
