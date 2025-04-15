import { Suspense } from "react";
import { Await } from "react-router";

const EvaluationSection = () => {
  return (
    <section id="evaluation" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Evaluación de la <span className="text-primary">Producción Académica</span>
        </h2>
        <hr className="border-primary border-2 rounded-full w-16 mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img
                src="https://ext.same-assets.com/3486587280/4061061103.svg"
                alt="Contexto icon"
                className="w-6 h-6 mr-2"
              />
              <h3 className="text-xl font-semibold text-primary">Contexto del Proyecto</h3>
            </div>
            <p className="text-gray-700 mb-4">
              La producción académica es el conjunto de investigaciones, publicaciones y aportes científicos
              generados por la comunidad académica para ampliar el conocimiento en diversas disciplinas. Se difunde a través
              de artículos en revistas científicas, libros, conferencias y tesis, garantizando la rigurosidad del proceso investigativo
              y su contribución al desarrollo social, económico y tecnológico.
            </p>
            <p className="text-gray-700">
              Más allá de la generación de conocimiento, la producción académica enfrenta desafíos como la disponibilidad de
              recursos, la presión por publicar y la accesibilidad del conocimiento. Sin embargo, su importancia es innegable,
              ya que impulsa el avance del saber, influye en políticas públicas y fomenta el desarrollo de nuevas tecnologías.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img
                src="https://ext.same-assets.com/3486587280/2320907649.svg"
                alt="Importancia icon"
                className="w-6 h-6 mr-2"
              />
              <h3 className="text-xl font-semibold text-primary">Importancia</h3>
            </div>
            <p className="text-gray-700 mb-4">
              La evaluación de la producción académica es fundamental para medir el impacto y la calidad del trabajo de
              investigación en una institución educativa.
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
                  <span className="font-semibold">Asignación de recursos:</span> Facilita la distribución de fondos
                  según contribución al conocimiento.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <p className="text-gray-700">
                  <span className="font-semibold">Reconocimiento a investigadores:</span> Valora el trabajo
                  docente incentivando la producción científica.
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
    </section>
  );
};

export default EvaluationSection;
