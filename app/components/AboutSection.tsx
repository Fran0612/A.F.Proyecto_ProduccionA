import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center relative inline-block">
            <span className="text-primary">Acerca</span> de
          </h2>
          <hr className="border-primary border-2 rounded-full w-20 mx-auto mt-4 mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprende los procesos de evaluación y acreditación en el sistema de educación superior ecuatoriano
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                      <span className="bg-primary/10 text-primary p-1 rounded-md mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </span>
                      Evolución de los Procesos de Evaluación
                    </h3>
                    <p className="text-gray-700">
                      El sistema de educación superior en Ecuador ha pasado por diversos procesos de evaluación con fines de acreditación, liderados por organismos como el CONEA, CEAACES y actualmente el CACES. Estos modelos han evolucionado desde enfoques cuantitativos, centrados en la categorización institucional, hacia metodologías más cualitativas que promueven la mejora continua y la participación activa de las universidades.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                      <span className="bg-primary/10 text-primary p-1 rounded-md mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                      Modelo Actual del CACES
                    </h3>
                    <p className="text-gray-700">
                      Actualmente, el CACES impulsa un modelo basado en la autoevaluación institucional como herramienta clave para el aseguramiento de la calidad. Este modelo ha sido construido con el aporte de universidades, redes académicas y organismos internacionales, consolidando una política de corresponsabilidad en la gestión de la calidad educativa.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-4 flex flex-col justify-center">
                <div className="bg-primary/5 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Producción Académica
                  </h4>
                  <p className="text-gray-700">
                    En este contexto, la producción académica se convierte en un componente esencial, ya que refleja el impacto de la investigación y la generación de conocimiento. Evaluarla y visualizarla permite fortalecer la toma de decisiones y fomentar una cultura institucional basada en evidencias.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-primary font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Impacto en la toma de decisiones
                    </div>
                    <div className="flex items-center text-sm text-primary font-medium mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Cultura basada en evidencias
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
