export function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <h2 className="section-title">Hablemos de tu proyecto</h2>
        <p className="section-description">
          ¿Tienes una idea en mente? Cuéntame sobre tu proyecto y juntos lo haremos realidad.
        </p>
        
        <div className="contact-methods">
          <h3>¿Prefieres el contacto directo?</h3>
          <div className="contact-list">
            <div className="contact-item">
              <p>WhatsApp (respuesta rápida)</p>
              <a href="https://wa.me/56979186871" className="contact-link">
                +56 9 7918 6871
              </a>
            </div>
            
            <div className="contact-item">
              <p>Correo electrónico</p>
              <a href="mailto:contacto@lefrog.shop" className="contact-link">
                contacto@lefrog.shop
              </a>
            </div>
            
            <div className="contact-item">
              <p>Ubicación</p>
              <div className="contact-address">
                Ancud, Chiloé - Chile
                <span className="address-note">Atención con cita previa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
