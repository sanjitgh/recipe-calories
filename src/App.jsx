import Banner from "./component/Banner/Banner";
import Header from "./component/Header/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <main className="container mx-auto px-3">
        <Banner></Banner>
      </main>
    </div>
  );
};

export default App;
