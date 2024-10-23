import Banner from "./component/Banner/Banner";
import Header from "./component/Header/Header";
import Ourrecipe from "./component/Ourrecipe/Ourrecipe";
import Recipes from "./component/Recipes/Recipes";
import Sidebar from "./component/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Header></Header>
      <main className="container mx-auto px-3">
        <Banner></Banner>
        <Ourrecipe></Ourrecipe>
        <section className="grid sm:grid-cols-3 grid-cols-1 gap-5 py-10 ">
          {/* main recipe section */}
          <Recipes></Recipes>
          {/* sidebar */}
          <Sidebar></Sidebar>
        </section>
      </main>
    </div>
  );
};

export default App;
