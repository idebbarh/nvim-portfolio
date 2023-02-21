import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Neovim from "./screens/Neovim";

function App(): JSX.Element {
  const pathname = window.location.pathname;

  /* if (pathname !== "/terminal") { */
  /*   return <Navigate to="/terminal" replace={true} />; */
  /* } */

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/neovim" replace={true} />} />
          <Route path="/neovim" element={<Neovim />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
