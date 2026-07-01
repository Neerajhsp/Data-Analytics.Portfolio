import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Tools } from '../components/sections/Tools';
import { Services } from '../components/sections/Services';
import { Projects } from '../components/sections/Projects';
import { DashboardGallery } from '../components/sections/DashboardGallery';
import { CaseStudies } from '../components/sections/CaseStudies';
import { SQLShowcase } from '../components/sections/SQLShowcase';
import { NotebookShowcase } from '../components/sections/NotebookShowcase';
import { BusinessInsights } from '../components/sections/BusinessInsights';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';
import { Certifications } from '../components/sections/Certifications';
import { GitHubStats } from '../components/sections/GitHubStats';
import { Resume } from '../components/sections/Resume';
import { Testimonials } from '../components/sections/Testimonials';
import { BlogPreview } from '../components/sections/BlogPreview';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Services />
      <Projects />
      <DashboardGallery />
      <CaseStudies />
      <SQLShowcase />
      <NotebookShowcase />
      <BusinessInsights />
      <Experience />
      <Education />
      <Certifications />
      <GitHubStats />
      <Resume />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <Contact />
    </>
  );
}
