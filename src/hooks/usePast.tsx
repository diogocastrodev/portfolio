import { pastContext } from "../context/PastContext";
import { useContext } from "react";

export default function usePast() {
  const usePast = useContext(pastContext);

  return usePast;
}
