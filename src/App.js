import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="container contact-us">
        <p>Feel Free to contact us for your customized plan</p>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
