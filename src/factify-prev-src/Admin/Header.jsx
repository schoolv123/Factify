import { FaBars } from "react-icons/fa";
import Logo from "../assets/img/logo.png";
export default function Header({ handleToggleSidebar }) {
  return (
    <>
      <header className="admin-header">
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <div className="logo">
          <img
            src={Logo}
            height="37"
            width="37"
            alt="logo"
            style={{ borderRadius: 5 }}
          />
          <p className="logo-text">factify</p>
        </div>
      </header>
    </>
  );
}
