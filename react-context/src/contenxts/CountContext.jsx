import { createContext, useContext, useState } from "react";

const CountContext = createContext();

export default function CountContextProvider({ children }) {
  const [temp, setTemp] = useState(20);

  function handleAddCount() {
    setTemp(temp < 28 ? temp + 1 : temp);
  }

  function handleReset() {
    setTemp(20);
  }

  function handleSubCount() {
    setTemp(temp > 16 ? temp - 1 : temp);
  }
  return (
    <CountContext.Provider
      value={{
        temp,
        handleAddCount,
        handleReset,
        handleSubCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCountContext() {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error(
      "Attenzione! Questo componente deve essere wrappato all'interno del CountContext.Provider",
    );
  }
  return context;
}
