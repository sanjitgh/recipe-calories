const Sidebar = ({
  recipeQueue,
  handelRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalorie
}) => {
  return (
    <div className="border rounded-xl py-5">
      <h1 className="font-bold text-xl text-center">
        Want to cook: {recipeQueue.length}
      </h1>
      <div className="divider"></div>
      {/* first table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {recipeQueue.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th className="p-1 p">{idx + 1}</th>
                <td className="p-1 p">{recipe.recipe_name}</td>
                <td className="p-1 p">
                  {recipe.preparing_time} <br /> minutes
                </td>
                <td className="p-1 p">
                  {recipe.calories} <br /> calories
                </td>
                <td className="p-1 p">
                  <button
                    onClick={() => {
                      handelRemove(recipe.recipe_id);
                      calculateTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="btn bg-[#0BE58A] rounded-full text-white text-sm px-3 hover:bg-[#08a866]"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* second table */}

      <h1 className="font-bold text-xl text-center mt-20">
        Currently cooking: {preparedRecipe.length}
      </h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-gray-500 space-y-5">
            {preparedRecipe.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th className="p-1">{idx + 1}</th>
                <td className="p-1">{recipe.recipe_name}</td>
                <td className="p-1">
                  {recipe.preparing_time} <br /> minutes
                </td>
                <td className="p-1">
                  {recipe.calories} <br /> calories
                </td>
              </tr>
            ))}
            <tr className="border-none">
              <th className="p-1"></th>
              <td className="p-1"></td>
              <td className="p-1 text-gray-900 font-medium">
                Total time = <br />{totalTime} minutes
              </td>
              <td className="p-1 text-gray-900 font-medium">
                Total calories = <br />{totalCalorie} calories
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
