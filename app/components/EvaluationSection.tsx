import { Suspense } from "react";
import { Await } from "react-router";

const EvaluationSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Evaluación de la <span className="text-primary">Producción Académica</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm">
            Sistema de análisis estadístico para la evaluación de indicadores de producción académica según estándares de acreditación institucional
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Marco de Evaluación
            </h3>
          </div>
          
          <div className="p-6">
            <div className="card-container bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                Información del Sistema de Evaluación
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://ext.same-assets.com/3486587280/4061061103.svg"
                      alt="Contexto icon"
                      className="w-6 h-6 mr-2"
                    />
                    <h3 className="text-xl font-semibold text-primary">Contexto del Proyecto</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-justify">
                    En el marco de los procesos de aseguramiento de la calidad y acreditación impulsados por el CACES, la evaluación de la producción académica representa un componente clave para medir el rendimiento investigativo de las instituciones de educación superior. En la Universidad Nacional de Chimborazo (UNACH), esta labor ha sido realizada manualmente por la Dirección de Investigación, lo cual ha implicado un proceso extenso, demandante y con limitaciones para generar información oportuna y precisa.
                  </p>
                  <p className="text-gray-700 text-justify">
                    Ante esta realidad, surge la iniciativa de desarrollar un sistema automatizado de evaluación de la producción académica, que permita recopilar, procesar y visualizar de forma eficiente los datos relacionados con artículos científicos, proyectos, publicaciones y otros productos de investigación generados por la comunidad universitaria. Esta herramienta facilitará el seguimiento de indicadores clave, mejorará la toma de decisiones y fomentará la transparencia institucional.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://ext.same-assets.com/3486587280/2320907649.svg"
                      alt="Importancia icon"
                      className="w-6 h-6 mr-2"
                    />
                    <h3 className="text-xl font-semibold text-primary">Importancia</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-justify">
                    La implementación de este sistema no solo optimizará el trabajo de la Dirección de Investigación de la UNACH, sino que también contribuirá directamente al cumplimiento de los estándares exigidos en los procesos de acreditación, fortaleciendo una gestión académica más eficiente, objetiva y orientada a la mejora continua en donde tendremos:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <p className="text-gray-700">
                        <span className="font-semibold">Medición del desempeño institucional:</span> Permite conocer
                        el nivel de productividad académica e identificar fortalezas.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <p className="text-gray-700">
                        <span className="font-semibold">Disponibilidad de información en tiempo real:</span> Permite acceder a reportes e indicadores actualizados de manera inmediata, facilitando la toma de decisiones institucionales.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      <p className="text-gray-700">
                        <span className="font-semibold">Impacto en rankings:</span> Factor clave en la evaluación de
                        universidades a nivel nacional e internacional.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationSection;
