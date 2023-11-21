import { createContext, useReducer, useContext } from 'react';
import { counterReducer, initialState } from '@/reducers/counterReducer';

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }

  return context;
}
