import { createContext, useContext, useState } from 'react';

const SharedContext = createContext();

export function SharedProvider ({ children }) {

    const [clickAmount, setClickAmount] = useState(0);

    const increment = () => setClickAmount((amount) => amount + 1);

    return (
      <SharedContext.Provider value={[clickAmount, increment]}>
        {children}
      </SharedContext.Provider>
    );
};

export function useSharedContext() {
  return useContext( SharedContext );
}