import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  // Navegación local: React Router se incorpora recién en el Hito 5.
  const [view, setView] = useState("home");

  const renderView = () => {
    if (view === "login") return <Login />;
    if (view === "register") return <Register />;
    if (view === "cart") return <Cart />;
    return <Home />;
  };

  return (
    <div className="app">
      <Navbar currentView={view} onNavigate={setView} />
      <main>{renderView()}</main>
      <Footer />
    </div>
  );
}

export default App;
