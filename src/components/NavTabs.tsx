import { useTab, type Tab } from '../lib/tab-state';

interface NavItem {
  name: string;
  id: Tab;
}

const tabs: NavItem[] = [
  { name: 'Projects', id: 'projects' },
  { name: 'Work', id: 'work' },
  { name: 'Stack & Services', id: 'stack' },
  { name: 'Music', id: 'music' },
  { name: 'Contact', id: 'contact' },
];

export default function NavTabs() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <nav className="w-full mt-4 mb-8">
      <div className="flex items-center gap-5 sm:gap-6 flex-nowrap overflow-x-auto no-scrollbar border-b border-white/[0.06] pb-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative text-sm md:text-[15px] transition-colors pb-2 shrink-0 whitespace-nowrap ${
                isActive
                  ? 'text-white font-semibold'
                  : 'text-fg-secondary hover:text-fg font-normal'
              }`}
            >
              {tab.name}
              {isActive && <span className="nav-underline" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
