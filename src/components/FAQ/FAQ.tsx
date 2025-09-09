import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqItems = [
    {
      question: '¿Qué formatos de archivo aceptan?',
      answer: 'Aceptamos archivos STL, OBJ y STEP. Si tienes otro formato, podemos ayudarte a convertirlo.'
    },
    {
      question: '¿Cuánto tiempo toma imprimir mi proyecto?',
      answer: 'El tiempo varía según el tamaño y complejidad. Prototipos simples pueden estar listos en 24-48 horas, mientras que proyectos más complejos pueden tomar hasta una semana.'
    },
    {
      question: '¿Qué materiales utilizan?',
      answer: 'Actualmente trabajamos principalmente con PLA y PETG por su excelente relación calidad-precio y por ser más amigables con el medio ambiente.'
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Preguntas Comunes</h2>
        <p className="section-description">
          Aquí respondo las dudas más frecuentes que me hacen mis clientes
        </p>
        
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="toggle-icon">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
