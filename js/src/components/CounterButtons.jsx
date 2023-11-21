import { useCounter } from '@/context/CounterContext';

export default function CounterButtons() {
  const { dispatch } = useCounter();

  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
