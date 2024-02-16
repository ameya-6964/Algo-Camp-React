import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="main__container">
        <Content title={"I Am Content 1"} bgColor={"orange"} />
        <Content title={"I Am Content 2"} bgColor={"purple"} />
        <Content title={"I Am Content 3"} bgColor={"limegreen"} />
        <Content title={"I Am Content 4"} bgColor={"crimson"} />
      </div>
      <Footer />
    </>
  );
}

export default App;
