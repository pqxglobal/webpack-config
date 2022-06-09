import "../styles/index.scss";
import Recipes from "./Recipes";
import spool from "../images/pipespool.png";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Industrial Technology</h1>
        </section>
        <img src={spool} alt="spool" width="250" />
        <Recipes />
      </main>    
    </>
  );
};

export default App;
