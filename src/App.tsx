import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useRoutes,
} from "react-router-dom";
import Neovim from "./screens/Neovim";
import Terminal from "./screens/Terminal";

function App(): JSX.Element {
  const pathname = window.location.pathname;
  const isNeovimOpen = false;

  const TerminalRedirecter = () =>
    useRoutes([
      {
        path: "/neovim/*",
        element: <Navigate to="/terminal" replace={true} />,
      },
      { path: "/", element: <Navigate to="/terminal" replace={true} /> },
      { path: "/terminal", element: <Terminal /> },
    ]);

  if (!isNeovimOpen) {
    return <TerminalRedirecter />;
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/neovim" replace={true} />} />
          <Route path="/neovim/*" element={<Neovim />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
