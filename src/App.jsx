import Banner from "./component/Banner/Banner";
import Header from "./component/Header/Header";
import Ourrecipe from "./component/Ourrecipe/Ourrecipe";

const App = () => {
  return (
    <div>
      <Header></Header>
      <main className="container mx-auto px-3">
        <Banner></Banner>
        <Ourrecipe></Ourrecipe>
      </main>
    </div>
  );
};

export default App;
