import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header className="flex justify-between container mx-auto py-5">
      <div>
        <h1 className="font-bold text-3xl">Recipe Calories</h1>
      </div>
      <div>
        <ul className="flex items-center gap-4 text-lg">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        <label className="input input-bordered flex flex-row-reverse items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button className="text-2xl bg-[#0BE58A] p-2 rounded-full"><FaRegUserCircle /></button>
      </div>
    </header>
  );
};

export default Header;
