import ProjectCard from '../components/ProjectCard';

const projectList = [
  { title: 'Project 1', description: 'Description for Project 1', link: '#' },
  { title: 'Project 2', description: 'Description for Project 2', link: '#' },
  { title: 'Project 3', description: 'Description for Project 3', link: '#' },
];

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
