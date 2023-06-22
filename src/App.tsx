import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import PokemonsList from "./pages/PokemonsList/PokemonsList";
import Pokemon from "./pages/Pokemon/Pokemon";
import Loading from "./common/Loading/Loading";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { isLoading } = useAppSelector((state) => state.pokemons);

  const num = 0
  if(num == 0){
    console.log("XD")
  }

  return (
    <BrowserRouter>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
