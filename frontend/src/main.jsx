import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Router from "./routes/Router";
import AuthContextProvider from "./contexts/Auth";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartProvider from "./contexts/cart";
const root = createRoot(document.getElementById("root"));
const client = new QueryClient();

root.render(
  <StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={client}>
        <CartProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </CartProvider>
      </QueryClientProvider>
    </AuthContextProvider>
  </StrictMode>
);
