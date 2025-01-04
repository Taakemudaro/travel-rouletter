import { useCallback, useState } from "react";

export const useStartRoulette = () => {
  const [start, setStart] = useState(false);

  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  return { startRoulette, start };
};
