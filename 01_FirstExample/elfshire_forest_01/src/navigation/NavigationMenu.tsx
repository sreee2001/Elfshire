import React, { useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  key: string;
  label: string;
  href?: string;
  children?: MenuItem[];
};

type Props = {
  menu: MenuItem[];
};

const NavigationMenu: React.FC<Props> = ({ menu }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="main-menu">
      <ul>
        {menu.map((item) => (
          <li
            key={item.key}
            className={item.children ? "has-dropdown" : ""}
            onMouseEnter={() => setOpenDropdown(item.key)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.href ? (
              <Link to={item.href}>{item.label}</Link>
            ) : (
              <span className="menu-label">{item.label}</span>
            )}
            {item.children && (
              <ul
                className="dropdown"
                style={{ display: openDropdown === item.key ? "flex" : "none" }}
              >
                {item.children.map((child) => (
                  <li key={child.key}>
                    <Link
                      to={child.href || "#"}
                      onClick={() => setOpenDropdown(null)} // Close dropdown on click
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
