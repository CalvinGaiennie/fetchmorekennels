import "./App.css";
import DogPhotos from "./components/DogPhotos";
import Header from "./components/Header";
import PhotoHeader from "./components/PhotoHeader";

function App() {
  return (
    <div>
      <Header />
      <PhotoHeader />
      <DogPhotos />
    </div>
  );
}

export default App;
