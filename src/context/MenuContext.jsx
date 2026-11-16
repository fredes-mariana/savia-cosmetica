import { createContext, useState } from 'react';

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <MenuContext.Provider
      value={{ menuOpen, toggleMenu, closeMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
}