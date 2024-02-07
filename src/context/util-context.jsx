import { createContext } from "react";

export const TempContext = createContext({
  maintemp: "",
  mintemp: "",
  maxtemp: "",
  sunrise: "",
  sunset: "",
});
