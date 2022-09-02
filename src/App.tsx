import React from "react";
import "App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { queryClient } from "utils/QueryClient";
import Home from "Page/Home";
import Drivers from "Page/Drivers";
import Standings from "Page/Standings";
import Banner from "components/Banner";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Banner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="drivers" element={<Drivers />} />
            <Route path="standings" element={<Standings />} />
            <Route element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
