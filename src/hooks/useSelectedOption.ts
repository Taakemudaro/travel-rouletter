import { useContext } from "react";
import {
  SelectedOptionContext,
  SelectedOptionContextType,
} from "../providers/SelectedOptionProvider";

export const useSelectedOption = (): SelectedOptionContextType =>
  useContext(SelectedOptionContext);
