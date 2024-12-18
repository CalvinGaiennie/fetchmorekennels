import "./App.css";
import DogPhotos from "./components/DogPhotos";
import Header from "./components/Header";
import About from "./components/About";
import PhotoHeader from "./components/PhotoHeader";
function App() {
  return (
    <>
      <Header />
      <PhotoHeader />
      <About />
      <DogPhotos />
    </>
  );
}

export default App;
