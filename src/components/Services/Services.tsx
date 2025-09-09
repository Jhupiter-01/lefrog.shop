export function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <h2 className="section-title">Soluciones en Impresión 3D</h2>
        <p className="section-description">
          Te acompañamos desde la idea hasta la pieza final
        </p>
        
        <div className="services-grid">
          <div className="service-card">
            <h3>Prototipos Rápidos</h3>
            <p>Convierte tus ideas en objetos tangibles rápidamente</p>
            <ul>
              <li>Asesoría en diseño 3D sin costo adicional</li>
              <li>Material estándar incluido</li>
              <li>Revisión de archivos con recomendaciones</li>
              <li>Soporte durante todo el proceso</li>
            </ul>
            <button className="service-button">Comenzar proyecto</button>
          </div>
          
          <div className="service-card">
            <h3>Piezas Funcionales</h3>
            <p>Componentes listos para uso en tus proyectos</p>
            <ul>
              <li>Materiales seleccionados según necesidad</li>
              <li>Acabados personalizables</li>
              <li>Ajustes según requerimientos</li>
              <li>Asesoría en selección de materiales</li>
            </ul>
            <button className="service-button">Consultar disponibilidad</button>
          </div>
        </div>
      </div>
    </section>
  );
}
