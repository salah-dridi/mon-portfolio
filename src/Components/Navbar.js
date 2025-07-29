// Navbar.js
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav style={{
      display: "flex",
      backgroundColor: "#1877f2", // لون فيسبوك أزرق
      padding: "10px 20px",
      alignItems: "center",
      justifyContent: "space-around",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          style={{
            color: location.pathname === to ? "#ffd700" : "white", // تمييز العنصر المختار باللون الأصفر
            textDecoration: "none",
            fontWeight: location.pathname === to ? "bold" : "normal",
            fontSize: "18px",
            padding: "8px 12px",
            borderRadius: "4px",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={e => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)"}
          onMouseLeave={e => e.target.style.backgroundColor = "transparent"}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
