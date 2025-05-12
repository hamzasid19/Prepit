import { BrowserRouter } from "react-router";
import "./App.css";
import Route from "./Routes/Route";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
