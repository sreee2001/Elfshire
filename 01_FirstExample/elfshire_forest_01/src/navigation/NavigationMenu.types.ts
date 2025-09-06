export type NavigationMenuItem = {
  key: string;
  label: string;
  href?: string;
  children?: NavigationMenuItem[];
};

export type NavigationMenuProps = {
  menu: NavigationMenuItem[];
};
