import { pastContext } from "../context/PastContext";
import { useContext, useState } from "react";

export default function usePast() {
  const usePast = useContext(pastContext);

  return usePast;
}
