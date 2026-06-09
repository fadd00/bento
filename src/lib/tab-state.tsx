import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

export type Tab = 'projects' | 'work' | 'music' | 'contact';

const TAB_ORDER: Tab[] = ['projects', 'work', 'music', 'contact'];

function isValidTab(tab: string | null): tab is Tab {
  return tab !== null && TAB_ORDER.includes(tab as Tab);
}

function getInitialTab(): Tab {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (isValidTab(tab)) return tab;
  }
  return 'projects';
}

interface TabContextValue {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const TabContext = createContext<TabContextValue | null>(null);

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<Tab>(getInitialTab);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('tab', activeTab);
    window.history.pushState({}, '', url.toString());
  }, [activeTab]);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab(): TabContextValue {
  const ctx = useContext(TabContext);
  if (!ctx) throw new Error('useTab must be used within TabProvider');
  return ctx;
}
