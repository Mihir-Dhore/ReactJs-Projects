import "./App.css";
import { Search } from "./Search";
import { Pagination } from "./Pagination";
import { Stories } from "./Stories";
import "./App.css";

function App() {
  return (
    <div className="AppMain">
      <h1>Welcome To News App </h1>
      <div>
        <Search />
        <Pagination />
        <Stories />
      </div>
    </div>
  );
}

export default App;
