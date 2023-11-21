import { useCounter } from '@/context/CounterContext';

export default function CounterDisplay() {
  const { state } = useCounter();

  return (
    <div>
      <h2>Counter: {state.count}</h2>
    </div>
  );
}
