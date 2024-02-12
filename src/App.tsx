import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();
import WeatherWidget from './components/weatherWidget/WeatherWidget';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <WeatherWidget location={'Cluj-Napoca,ro'} />
    </QueryClientProvider>
  )
};


