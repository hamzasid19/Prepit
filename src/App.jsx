import { BrowserRouter } from "react-router";
import "./App.css";
import Route from "./Routes/Route";
import store from "./store";
import { Provider } from "react-redux";
import ScrollToTop from "./Utils/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route />
        <ScrollToTop />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
