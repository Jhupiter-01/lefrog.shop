export function Gallery() {
  const projects = [
    {
      title: 'Modelo a escala del Titan Emperador',
      category: 'Modelo a escala',
      material: 'PETG',
      description: 'Modelo a escala 1:4 del Titan Emperador Warhammer 40k, dividido en muchas piezas para su impresión.',
      image: '/bmw-car-mirror-bracket-3d-printed-grey-abs-automot.jpg'
    },
    {
      title: 'Avion Aeronca Champion',
      category: 'Modelo a escala',
      material: 'PETG',
      description: 'Avion Aeronca Champion, modelo a escala 1:4, dividido en muchas piezas para su impresión.',
      image: '/drone-racing-frame-3d-printed-black-pla-lightweigh.jpg'
    },
    {
      title: 'Nave Crucero de Batalla',
      category: 'Modelo a escala',
      material: 'PETG',
      description: 'Nave Crucero de Batalla, modelo a escala 1:4, dividido en muchas piezas para su impresión.',
      image: '/architectural-building-model-white-resin-3d-printe.jpg'
    }
  ];

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <h2 className="section-title">Galería de Proyectos</h2>
        <p className="section-description">Nuestros trabajos más recientes</p>
        
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-details">
                <div className="project-meta">
                  <span className="category">{project.category}</span>
                  <span className="material">{project.material}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
