import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="sm:col-span-2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
                {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;
