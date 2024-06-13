import { useState, useEffect } from "react";
import axios from "axios";

import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsao from "./components/Previsao";

import { Titulo } from "./AppStyles";

function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?q=${cidade}&exclude={part}&appid=${apiKey}`
      );

      setClima(respostaClima.data);
    } catch (error) {
      console.log("Erro ao buscar clima: ", error);
    }
  };

  return (
    <div>
      <Titulo>Condições Climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      <ClimaAtual />
      <Previsao />
    </div>
  );
}

export default App;
