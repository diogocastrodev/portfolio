import { useState } from "react";

export default function usePast() {
  const [Past, setPast] = useState<string[]>([]);

  return {
    Past,
    setPast,
  };
}
