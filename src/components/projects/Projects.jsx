import Title from '../layouts/Title';
import { AllOfMyProjects } from './index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-12">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {AllOfMyProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.name}
            des={project.description}
            image={project.image}
            repo={project.repository}
            demo={project.liveDemo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
