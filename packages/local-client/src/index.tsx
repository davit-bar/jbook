import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import CellList from "./components/cell-list";
import { store } from "./state";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
  // main component as of now
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

root.render(<App />);
