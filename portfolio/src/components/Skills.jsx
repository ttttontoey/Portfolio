export default function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Figma'];
  
    return (
      <section className="skills">
        <h2>ทักษะของฉัน</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }
  