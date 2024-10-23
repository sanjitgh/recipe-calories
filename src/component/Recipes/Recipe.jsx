import { IoMdStopwatch } from "react-icons/io";
import { FaFire } from "react-icons/fa";
const Recipe = ({ recipe }) => {
    const { recipe_name, recipe_image, short_description, preparing_time, calories, ingredients } = recipe
    return (
        <div className="bg-white p-5 rounded-xl border border-slate-200">
            <img className="rounded-xl max-h-72 w-full" src={recipe_image} alt="" />
            <h1 className="my-4 text-xl font-semibold text-slate-950">{recipe_name}</h1>
            <p className="text-slate-600 pb-4">{short_description}</p>
            <div className="divider"></div>
            <h3 className="font-medium text-lg mb-2">Ingredients: {ingredients.length}</h3>
            <ul className="space-y-2">
                {
                    ingredients.map((item, idx) => <li key={idx} className="list-disc ml-5 text-gray-500">{item}</li>)
                }
            </ul>
            <div className="divider"></div>
            <div className="mb-4">
                <ul className="flex justify-between">
                    <li className="text-gray-500 flex items-center gap-2"><IoMdStopwatch />
                    {preparing_time} minutes</li>
                    <li className="text-gray-500 flex items-center gap-2"><FaFire /> {calories} calories</li>
                </ul>
            </div>
            <button className="bg-[#0BE58A] rounded-full text-white px-4 py-2">Want to Cook</button>
        </div>
    );
};

export default Recipe;