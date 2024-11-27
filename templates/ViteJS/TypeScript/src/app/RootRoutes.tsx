import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

export default function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
