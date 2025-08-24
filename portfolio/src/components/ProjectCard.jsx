function ProjectCard({ title, description, openModal }) {
  return (
    <div className="project-card" onClick={openModal}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
