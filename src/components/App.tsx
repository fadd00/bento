import { TabProvider, useTab } from '../lib/tab-state';
import HeroSection from './HeroSection';
import ProfileSection from './ProfileSection';
import NavTabs from './NavTabs';
import PageTransition from './PageTransition';
import ProjectsSection from './sections/ProjectsSection';
import WorkSection from './sections/WorkSection';
import StackSection from './sections/StackSection';
import MusicSection from './sections/MusicSection';
import ContactSection from './sections/ContactSection';
import type { ProjectData, WorkData } from '../lib/types';

interface AppProps {
  projects: ProjectData[];
  work: WorkData[];
}

function TabContent({ projects, work }: AppProps) {
  const { activeTab } = useTab();

  return (
    <PageTransition activeTab={activeTab}>
      {activeTab === 'projects' && <ProjectsSection projects={projects} />}
      {activeTab === 'work' && <WorkSection work={work} />}
      {activeTab === 'stack' && <StackSection />}
      {activeTab === 'music' && <MusicSection />}
      {activeTab === 'contact' && <ContactSection />}
    </PageTransition>
  );
}

export default function App({ projects, work }: AppProps) {
  return (
    <TabProvider>
      {/* Hero */}
      <HeroSection />

      {/* Main Container */}
      <main className="max-w-content mx-auto px-4 pb-16">
        <ProfileSection />
        <NavTabs />
        <TabContent projects={projects} work={work} />

        {/* Minimal Footer */}
        <footer className="mt-14 pt-6 border-t border-white/[0.06] text-center text-xs text-muted-text">
          &copy; {new Date().getFullYear()} Dhika &bull; Built with Astro
        </footer>
      </main>
    </TabProvider>
  );
}
