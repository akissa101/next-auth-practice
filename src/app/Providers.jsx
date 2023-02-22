"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function Providers({ children }) {
  const client = new QueryClient();

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <QueryClientProvider client={client}>
        <div className="dark:bg-gray-800 dark:text-gray-200 text-gray-800 bg-gray-100 transition-colors duration-300 min-h-screen select-none">
          {children}
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
