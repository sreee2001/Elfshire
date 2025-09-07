type MenuItem = {
  key: string;
  label: string;
  href?: string;
  children?: MenuItem[];
};

const NavigationMenuOptions: MenuItem[] = [
  { key: "home", label: "Home", href: "/home" },
  { key: "aboutus", label: "About Us", href: "/about" },
  {
    key: "services",
    label: "Services",
    href: "/services/artificialintelligence",
    children: [
      {
        key: "artificialintelligence",
        label: "Artificial Intelligence",
        href: "/services/artificialintelligence",
      },
      {
        key: "applicationDevelopmentAndModernization",
        label: "Application Development and Modernization",
        href: "/services/applicationDevelopmentAndModernization",
      },
      {
        key: "cloudAndInfrastructure",
        label: "Cloud and Infrastructure",
        href: "/services/cloudAndInfrastructure",
      },
      {
        key: "cybersecurity",
        label: "Cybersecurity",
        href: "/services/cybersecurity",
      },
      {
        key: "data",
        label: "Data",
        href: "/services/data",
      },
      {
        key: "managedServices",
        label: "Managed Services",
        href: "/services/managedServices",
      },
      // Add more children as needed
    ],
  },
  { key: "demo", label: "Demo", href: "/demo", },
  // Add more top-level menu items as needed
];
export default NavigationMenuOptions;
// Usage example (in a React component):
/*
import NavigationMenuOptions from './path/to/menu';
...
<nav>
  <ul>
    {NavigationMenuOptions.map(item => (
      <li key={item.key}>
        <a href={item.href}>{item.label}</a>
        {item.children && (
          <ul>
            {item.children.map(child => (
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
*/
// This code defines a structured menu configuration for a React application, allowing for easy rendering of navigation menus with potential submenus.
