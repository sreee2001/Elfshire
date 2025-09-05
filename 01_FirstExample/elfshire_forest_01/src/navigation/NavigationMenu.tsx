import React from "react";
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

const NavigationMenu: React.FC<Props> = ({ menu }) => (
  <nav className="main-menu">
    <ul>
      {menu.map((item) => (
        <li key={item.key} className={item.children ? "has-dropdown" : ""}>
          <Link to={item.href}>{item.label}</Link>
          {item.children && (
            <ul className="dropdown">
              {item.children.map((child) => (
                <li key={child.key}>
                  <Link to={child.href}>{child.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export default NavigationMenu;
