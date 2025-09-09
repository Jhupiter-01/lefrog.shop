export function OurStory() {
  return (
    <section className="our-story" id="nuestra-historia">
      <div className="container">
        <div className="story-content">
          <div className="text-section">
            <h2 className="section-title">Nuestra Historia</h2>
            <p className="highlight-text">
              Nacimos en <span className="highlight">Chiloé</span> para <span className="highlight">simplificar</span> la fabricación digital
            </p>
            <div className="description">
              <p>En el corazón de Ancud, en la hermosa isla de Chiloé, nació Lefrog con una misión clara.</p>
              <p>Lo que comenzó como un taller local hoy se ha convertido en un referente nacional.</p>
            </div>
          </div>
          
          <div className="stats-section">
            {[
              {value: '200+', label: 'Proyectos completados'},
              {value: '99%', label: 'Clientes satisfechos'},
              {value: '24/7', label: 'Soporte técnico'}
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
