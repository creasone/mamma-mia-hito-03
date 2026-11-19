function Navbar({ currentView, onNavigate }) {
  // El token continúa simulado porque la autenticación real corresponde a otro hito.
  const token = false;
  const total = 25000;

  const navClass = (view) =>
    `nav-button${currentView === view ? " nav-button--active" : ""}`;

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar__content">
        <button
          className="navbar__brand"
          type="button"
          onClick={() => onNavigate("home")}
        >
          Mamma Mía!
        </button>

        <div className="navbar__links">
          {/* Home siempre es visible, sin importar el valor del token. */}
          <button
            className={navClass("home")}
            type="button"
            onClick={() => onNavigate("home")}
          >
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="nav-button" type="button">
                🔓 Profile
              </button>
              <button className="nav-button" type="button">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button
                className={navClass("login")}
                type="button"
                onClick={() => onNavigate("login")}
              >
                🔐 Login
              </button>
              <button
                className={navClass("register")}
                type="button"
                onClick={() => onNavigate("register")}
              >
                🔐 Register
              </button>
            </>
          )}
        </div>

        {/* Total también permanece visible para ambos estados del token. */}
        <button className="total-button" type="button" onClick={() => onNavigate("cart")}>
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
