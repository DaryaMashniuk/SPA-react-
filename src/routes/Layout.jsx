import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/albums" end={true} className={({ isActive }) => (isActive ? "link-active" : "")}>
            Albums
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "")}>
            Users
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="rights">
          <p className="copyright">Created by: Mashnyuk Darya</p>
          <p className="place">BSU: 2024</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
