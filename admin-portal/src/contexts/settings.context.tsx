import React, { createContext, useContext, ReactNode } from 'react';
import { siteSettings } from '@/settings/site.settings';

interface SettingsContextType {
  siteSettings: typeof siteSettings;
  siteTitle: string;
  siteSubtitle: string;
  currency: string;
  currencyOptions: any[];
  useGoogleMap: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: {
      original: string;
      thumbnail: string;
    };
    twitterHandle: string;
    twitterCardType: string;
  };
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const value = {
    siteSettings,
    siteTitle: siteSettings.name,
    siteSubtitle: siteSettings.description,
    currency: siteSettings.currency,
    currencyOptions: [
      { value: 'USD', label: 'US Dollar' },
      { value: 'EUR', label: 'Euro' },
      { value: 'GBP', label: 'British Pound' },
    ],
    useGoogleMap: true,
    seo: siteSettings.seo,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}; 