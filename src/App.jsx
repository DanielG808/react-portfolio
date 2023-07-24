import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <>
      <ContentContainer />
      <Footer />
    </>
  );
}

export default App;
