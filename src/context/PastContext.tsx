import childrenType from "../types/childrenType";
import { createContext, useState } from "react";

type PastType = string[];

interface IContext {
  Past: PastType;
  allCommands: PastType;
  addPast: (past: string) => void;
  delPast: () => void;
}

const pastContext = createContext<IContext>(null as any);

interface props {
  children: childrenType;
}

function PastContextProvider({ children }: props) {
  const [sessionCommands, setSessionCommands] = useState<PastType>([]);
  const [Past, setPast] = useState<PastType>([]);

  const addPast = (newPast: string) => {
    setPast((past) => [...past, newPast]);
    setSessionCommands((commands) => [...commands, newPast]);
  };

  const delPast = () => {
    setPast([]);
  };
  return (
    <>
      <pastContext.Provider
        value={{
          Past,
          allCommands: sessionCommands,
          addPast,
          delPast,
        }}
      >
        {children}
      </pastContext.Provider>
    </>
  );
}

export { pastContext, PastContextProvider };
