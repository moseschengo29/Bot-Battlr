import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SingleBot from "./pages/SingleBot";
import { BotProvider } from "./components/BotProvider";
import Navbar from "./components/Navbar";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  return (
    <BotProvider>
      <Navbar />
      <YourBotArmy />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bot/:id" element={<SingleBot />} />
      </Routes>
    </BotProvider>
  );
}

export default App;
