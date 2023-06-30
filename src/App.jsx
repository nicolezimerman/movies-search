import "./App.css";
import { Movies } from "./Components/Movies";

function App() {
  return (
    <main>
      <h1>Movies search</h1>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
      <Movies></Movies>
    </main>
  );
}

export default App;
