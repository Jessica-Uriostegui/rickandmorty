import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersPage from "./components/CharactersPage";
import CharacterPage from "./components/CharacterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          {/* :id - the colon represents that this is a dynamic route. anything we put in our path will be utilized as a parameter.  in this case, that will be our "id" */}
          <Route path="/:id" element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
