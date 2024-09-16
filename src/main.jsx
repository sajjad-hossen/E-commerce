import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Router from "./routes/Router";
import AuthContextProvider from "./contexts/Auth";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = createRoot(document.getElementById("root"));
const client = new QueryClient();

root.render(
  <StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={client}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthContextProvider>
  </StrictMode>
);
