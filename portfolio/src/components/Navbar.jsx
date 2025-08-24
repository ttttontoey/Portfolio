function Navbar() {
  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <ul>
        {['home','about','projects','skills','contact'].map(page => (
          <li key={page}>
            <a href={`#${page}`} onClick={e => handleClick(e, page)}>
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
