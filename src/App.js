import { GlobalStyle } from "./style/global"
import { Home } from "./pages/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer limit={1} />
      <Home />
    </>
  );
}

export default App;
