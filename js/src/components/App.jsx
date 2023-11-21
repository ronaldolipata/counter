import { CounterProvider } from '@/context/CounterContext';
import CounterDisplay from '@/components/CounterDisplay';
import CounterButtons from '@/components/CounterButtons';

export default function App() {
  return (
    <CounterProvider>
      <div>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
}
