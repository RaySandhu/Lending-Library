import SearchBar from "./SearchBar";
import AboutPage from "./AboutPage"
import mockGoogleVolume from "./mock-responses/mock-google-volume.json"

function App(props) {

  return (
    <div>
      <h1>The Lending Library</h1> <SearchBar />
      <AboutPage />
      
      <p>{mockGoogleVolume.volumeInfo.title}</p>
      
      <h3>Ray's Corner</h3>
      <h3>Joelle’s Corner</h3>
    </div>
  );
}

export default App;
