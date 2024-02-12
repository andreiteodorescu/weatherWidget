import WeatherWidget, { WeatherWidgetProps } from './WeatherWidget';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import '../../styles/main.scss';

const queryClient = new QueryClient();

export default {
  title: 'Components/WeatherWidget',
  component: WeatherWidget,
  argTypes: {
    location: { control: 'text' },
  },
};

export const Bucharest = (args: WeatherWidgetProps) => (
  <QueryClientProvider client={queryClient}>
    <WeatherWidget {...args} />
  </QueryClientProvider>
);

export const ClujNapoca = (args: WeatherWidgetProps) => (
    <QueryClientProvider client={queryClient}>
        <WeatherWidget {...args} />
    </QueryClientProvider>
);

export const Paris = (args: WeatherWidgetProps) => (
    <QueryClientProvider client={queryClient}>
        <WeatherWidget {...args} />
    </QueryClientProvider>
);

Bucharest.args = {
  location: 'Bucharest',
};

ClujNapoca.args = {
    location: 'Cluj-Napoca,ro',
};

Paris.args = {
    location: 'Paris',
};