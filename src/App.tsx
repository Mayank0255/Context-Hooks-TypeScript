import React from "react";
import { AppProvider } from "./contexts/context";
import Products from "./components/Products";
import List from "./components/List";
import "./styles.css";

export default function App() {
  return (
    <AppProvider>
      <Products />
      <List />
    </AppProvider>
  );
}
