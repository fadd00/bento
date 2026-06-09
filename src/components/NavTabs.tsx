import { useTab, type Tab } from '../lib/tab-state';

interface NavItem {
  name: string;
  id: Tab | 'blog';
  external?: boolean;
}

const tabs: NavItem[] = [
  { name: 'Projects', id: 'projects' },
  { name: 'Work', id: 'work' },
  { name: 'Music', id: 'music' },
  { name: 'Contact', id: 'contact' },
  { name: 'Blog', id: 'blog', external: true },
];

export default function NavTabs() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <nav className="w-full mt-4 mb-2 pt-10 sm:pt-12">
      <div className="flex items-center gap-6 flex-wrap">
        {tabs.map((tab) => {
          if (tab.external) {
            return (
              <a
                key={tab.id}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-secondary hover:text-fg transition-colors text-sm md:text-[15px] font-normal flex items-center gap-1 group"
              >
                {tab.name}
                <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            );
          }

          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`relative text-sm md:text-[15px] transition-colors pb-1 ${
                isActive
                  ? 'text-fg font-semibold'
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
