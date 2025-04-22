import type { FC } from "react";

const KeyPointsSection: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Puntos <span className="text-primary">Clave</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm">
            Aspectos fundamentales en la evaluación de la producción académica para instituciones de educación superior
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Aspectos Fundamentales
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transform transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Objetividad</h3>
                </div>
                <p className="text-gray-600">
                  Medición precisa del rendimiento académico mediante parámetros cuantificables y verificables, eliminando sesgos subjetivos en la evaluación.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transform transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Estandarización</h3>
                </div>
                <p className="text-gray-600">
                  Aplicación de criterios uniformes alineados con estándares nacionales e internacionales para facilitar comparativas entre instituciones.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transform transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Periodicidad</h3>
                </div>
                <p className="text-gray-600">
                  Seguimiento sistemático y regular de la productividad académica para identificar tendencias, avances y áreas de mejora en tiempo oportuno.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transform transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Equidad</h3>
                </div>
                <p className="text-gray-600">
                  Consideración de contextos particulares y diversidad disciplinar que permita una valoración justa de la producción en distintos campos.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transform transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Impacto</h3>
                </div>
                <p className="text-gray-600">
                  Valoración de la relevancia, alcance y repercusión de las contribuciones académicas en el ámbito científico y social.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transform transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Transparencia</h3>
                </div>
                <p className="text-gray-600">
                  Comunicación clara y accesible de criterios, métodos y resultados de evaluación para toda la comunidad académica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPointsSection;
