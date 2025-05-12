import { BrowserRouter } from "react-router";
import "./App.css";
import Route from "./Routes/Route";
import store from "./store";
import { Provider } from "react-redux";
import ScrollToTop from "./Utils/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route />
        <ScrollToTop />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
