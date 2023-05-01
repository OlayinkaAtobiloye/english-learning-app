import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import HomePage from "./pages/home/home";
import MetricsPage from "./pages/metrics/metrics";

function App() {
  return (
    <main className="app_wrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stat" element={<MetricsPage />} />
      </Routes>
      <Navbar />
    </main>
  );
}

export default App;
