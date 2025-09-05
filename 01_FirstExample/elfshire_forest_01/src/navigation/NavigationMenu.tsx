import React from "react";

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
          <a href={item.href}>{item.label}</a>
          {item.children && (
            <ul className="dropdown">
              {item.children.map((child) => (
                <li key={child.key}>
                  <a href={child.href}>{child.label}</a>
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
