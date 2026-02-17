import Navigation from "@/components/Navigation";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import { allProjects } from "@/data/allProjects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <ProjectsGrid projects={allProjects} />
      <Footer />
    </div>
  );
}
