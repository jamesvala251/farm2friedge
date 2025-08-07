import React, { createContext, useContext, ReactNode, useState } from 'react';

interface UIContextType {
  displaySidebar: boolean;
  displayFilter: boolean;
  displayMobileMenu: boolean;
  displaySearch: boolean;
  displayCart: boolean;
  displayDrawer: boolean;
  drawerView: string | null;
  modalView: string | null;
  userSidebarView: string | null;
  closeSidebar: () => void;
  closeFilter: () => void;
  closeMobileMenu: () => void;
  closeSearch: () => void;
  closeCart: () => void;
  closeDrawer: () => void;
  openSidebar: () => void;
  openFilter: () => void;
  openMobileMenu: () => void;
  openSearch: () => void;
  openCart: () => void;
  openDrawer: (view: string) => void;
  setModalView: (view: string) => void;
  setUserSidebarView: (view: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [displayFilter, setDisplayFilter] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [drawerView, setDrawerView] = useState<string | null>(null);
  const [modalView, setModalView] = useState<string | null>(null);
  const [userSidebarView, setUserSidebarView] = useState<string | null>(null);

  const openSidebar = () => setDisplaySidebar(true);
  const closeSidebar = () => setDisplaySidebar(false);
  const openFilter = () => setDisplayFilter(true);
  const closeFilter = () => setDisplayFilter(false);
  const openMobileMenu = () => setDisplayMobileMenu(true);
  const closeMobileMenu = () => setDisplayMobileMenu(false);
  const openSearch = () => setDisplaySearch(true);
  const closeSearch = () => setDisplaySearch(false);
  const openCart = () => setDisplayCart(true);
  const closeCart = () => setDisplayCart(false);
  const openDrawer = (view: string) => {
    setDisplayDrawer(true);
    setDrawerView(view);
  };
  const closeDrawer = () => {
    setDisplayDrawer(false);
    setDrawerView(null);
  };

  const value = {
    displaySidebar,
    displayFilter,
    displayMobileMenu,
    displaySearch,
    displayCart,
    displayDrawer,
    drawerView,
    modalView,
    userSidebarView,
    closeSidebar,
    closeFilter,
    closeMobileMenu,
    closeSearch,
    closeCart,
    closeDrawer,
    openSidebar,
    openFilter,
    openMobileMenu,
    openSearch,
    openCart,
    openDrawer,
    setModalView,
    setUserSidebarView,
  };

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
}; 