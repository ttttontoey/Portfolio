export default function Projects() {
    const projects = [
      { title: 'เว็บร้านกาแฟ', description: 'สร้างด้วย React + Tailwind CSS' },
      { title: 'ระบบจัดการงาน', description: 'ใช้ Firebase + React Hooks' }
    ];
  
    return (
      <section className="projects">
        <h2>ผลงาน</h2>
        <ul>
          {projects.map((proj, i) => (
            <li key={i}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  