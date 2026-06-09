import { TabProvider, useTab } from '../lib/tab-state';
import HeroSection from './HeroSection';
import NavTabs from './NavTabs';
import PageTransition from './PageTransition';
import ProjectsSection from './sections/ProjectsSection';
import WorkSection from './sections/WorkSection';
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
      {activeTab === 'music' && <MusicSection />}
      {activeTab === 'contact' && <ContactSection />}
    </PageTransition>
  );
}

export default function App({ projects, work }: AppProps) {
  return (
    <TabProvider>
      <div className="max-w-content mx-auto px-4 pb-12">
        <HeroSection />
        <NavTabs />
        <TabContent projects={projects} work={work} />
      </div>
    </TabProvider>
  );
}
