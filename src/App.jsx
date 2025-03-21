import NavBar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <br />
        <br />
        <b>This is footer area</b>
      </footer>
    </div>
  );
}
export default App;
