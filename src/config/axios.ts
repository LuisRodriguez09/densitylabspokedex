import axios from "axios";
import { BASE_URL_POKEAPI } from "../constants";

axios.defaults.baseURL = BASE_URL_POKEAPI;

export default axios;