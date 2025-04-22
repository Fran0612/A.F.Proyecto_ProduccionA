import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Acerca</span> de
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm">
            Comprende los procesos de evaluación y acreditación en el sistema de educación superior ecuatoriano
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Procesos de Evaluación
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary/10 text-primary p-1 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-primary">Evolución de los Procesos de Evaluación</h3>
                  </div>
                  <p className="text-gray-700 text-justify">
                    El sistema de educación superior en Ecuador ha pasado por diversos procesos de evaluación con fines de acreditación, liderados por organismos como el CONEA, CEAACES y actualmente el CACES. Estos modelos han evolucionado desde enfoques cuantitativos, centrados en la categorización institucional, hacia metodologías más cualitativas que promueven la mejora continua y la participación activa de las universidades.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary/10 text-primary p-1 rounded-md mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-primary">Modelo Actual del CACES</h3>
                  </div>
                  <p className="text-gray-700 text-justify">
                    Actualmente, el CACES impulsa un modelo basado en la autoevaluación institucional como herramienta clave para el aseguramiento de la calidad. Este modelo ha sido construido con el aporte de universidades, redes académicas y organismos internacionales, consolidando una política de corresponsabilidad en la gestión de la calidad educativa.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-4">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://ext.same-assets.com/3486587280/4061061103.svg"
                      alt="Producción icon"
                      className="w-6 h-6 mr-2"
                    />
                    <h3 className="text-xl font-semibold text-primary">Producción Académica</h3>
                  </div>
                  <p className="text-gray-700 text-justify mb-6">
                    En este contexto, la producción académica se convierte en un componente esencial, ya que refleja el impacto de la investigación y la generación de conocimiento. Evaluarla y visualizarla permite fortalecer la toma de decisiones y fomentar una cultura institucional basada en evidencias.
                  </p>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <div className="flex items-center mb-3">
                      <span className="text-primary font-bold mr-2">•</span>
                      <p className="text-gray-700">
                        <span className="font-semibold">Impacto en la toma de decisiones:</span> Facilita la gestión estratégica basada en datos.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary font-bold mr-2">•</span>
                      <p className="text-gray-700">
                        <span className="font-semibold">Cultura basada en evidencias:</span> Promueve un enfoque científico en la gestión universitaria.
                      </p>
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

