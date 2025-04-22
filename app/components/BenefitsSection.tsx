import React from "react";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Beneficios</span> y Desafíos
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm">
            Evaluar el impacto de nuestro sistema en la productividad y calidad de la investigación académica.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Beneficios */}
              <div>
                <div className="mb-6 border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Beneficios del Sistema
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex p-4 bg-green-50 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Mejora de la calidad académica</h4>
                      <p className="text-gray-600">
                        Incentiva la producción de investigaciones de mayor calidad y 
                        relevancia, elevando el nivel académico institucional.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex p-4 bg-green-50 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Optimización de recursos</h4>
                      <p className="text-gray-600">
                        Permite una asignación más eficiente de recursos basada en 
                        resultados medibles y objetivos claros.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex p-4 bg-green-50 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Reconocimiento justo</h4>
                      <p className="text-gray-600">
                        Establece mecanismos de reconocimiento basados en méritos 
                        objetivos, fomentando un ambiente de sana competencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desafíos */}
              <div>
                <div className="mb-6 border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Desafíos a Superar
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex p-4 bg-amber-50 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Resistencia al cambio</h4>
                      <p className="text-gray-600">
                        Adaptación a nuevos parámetros de evaluación que pueden generar 
                        resistencia inicial en la comunidad académica.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex p-4 bg-amber-50 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Diversidad disciplinar</h4>
                      <p className="text-gray-600">
                        Desarrollo de indicadores que reconozcan las particularidades 
                        de diferentes áreas del conocimiento.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex p-4 bg-amber-50 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Actualización continua</h4>
                      <p className="text-gray-600">
                        Mantenimiento y actualización de indicadores y criterios conforme 
                        evolucionan los estándares académicos.
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

export default BenefitsSection;
