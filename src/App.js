import NavBar from "./compontents/navbar/navbar";
import GameDispaly from "./compontents/gameDisplay/gameDisplay";
import "./App.css";

function App() {
  return (
    <div className="gridContainer">
      <main className="header">
        <NavBar />
      </main>
      <section className="mainCol">
      <GameDispaly />
      </section>
    </div>
  );
}

export default App;
