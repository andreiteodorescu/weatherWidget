import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import WeatherWidget from './components/weatherWidget/WeatherWidget';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <WeatherWidget location={'Cluj-Napoca,ro'} />
    </QueryClientProvider>
  )
};


