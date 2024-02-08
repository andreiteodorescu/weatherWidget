import React from 'react';
import WeatherWidget, { WeatherWidgetProps } from './WeatherWidget';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '../../styles/main.scss';

export default {
  title: 'Components/WeatherWidget',
  component: WeatherWidget,
  argTypes: {
    location: { control: 'text' },
  },
};

export const Bucharest = (args: WeatherWidgetProps) => {
  const queryClient = new QueryClient();

  React.useEffect(() => {
    // Refetch queries when the story is mounted
    queryClient.refetchQueries();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WeatherWidget {...args} />
    </QueryClientProvider>
  );
};
Bucharest.args = {
  location: 'Bucharest',
};

export const ClujNapoca = (args: WeatherWidgetProps) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 0, refetchOnMount: true } },
  });

  React.useEffect(() => {
    // Refetch queries when the story is mounted
    queryClient.refetchQueries();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WeatherWidget {...args} />
    </QueryClientProvider>
  );
};
ClujNapoca.args = {
  location: 'Cluj-Napoca,ro',
};

export const Paris = (args: WeatherWidgetProps) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 0, refetchOnMount: true } },
  });

  React.useEffect(() => {
    // Refetch queries when the story is mounted
    queryClient.refetchQueries();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WeatherWidget {...args} />
    </QueryClientProvider>
  );
};
Paris.args = {
  location: 'Paris',
};
